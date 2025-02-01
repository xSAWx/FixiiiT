import React, { useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdDelete,
  MdLocalShipping,
  MdMoreHoriz,
  MdSearch,
} from "react-icons/md";
import Select from "../../Components/common/Select";
import { useDeleteUser, useGetAllUsers } from "../../Hooks/useSign";
import Input from "../../Components/common/Input";
import Dropdown from "../../Components/common/Dropdown";
import ZrSend from "./Order/ZrSend";

function Users() {
  const [page, setpage] = useState(1);
  const [filter, setfilter] = useState({ sort: "createdAt", limit: 20 });
  const [mdl, setmdl] = useState(false);

  const { users, getAll, loading } = useGetAllUsers({ page, filter });

  const { Delete } = useDeleteUser();

  const DeleteHandler = async (_id) => {
    Delete(_id);
    await getAll();
  };

  console.log(users?.pages?.total);

  return (
    <section className="border border-black/20 p-4 rounded-xl overflow-auto md:max-w-full max-w-[100vw]">
      <article className="w-full flex justify-between items-center">
        <aside className="flex gap-1 items-center text-3xl text-black/80">
          <button
            disabled={page === 1}
            className="hover:bg-black/10 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-black/0 rounded-full p-1"
            onClick={() => setpage(page !== 1 ? page - 1 : page)}
          >
            <MdChevronLeft />
          </button>
          <button
            disabled={page === users?.pages?.total}
            onClick={() => setpage(page + 1)}
            className="hover:bg-black/10 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-black/0 rounded-full p-1 "
          >
            <MdChevronRight />
          </button>
          <input
            value={page}
            onChange={(e) =>
              setpage(
                Math.max(1, Math.min(e.target.value, users?.pages?.total))
              )
            }
            type="number"
            max={users?.pages?.total || 1}
            className="w-6 outline-tertiary text-lg py-1.5 mx-auto text-center"
          />
          <p className="text-lg">/ {users?.pages?.total}</p>
          <Input
            set={setfilter}
            name="search"
            icon={<MdSearch />}
            classs="h-[44px]"
            className="!w-40 ml-4"
            wait={true}
          />
        </aside>

        <div className="flex gap-4">
          <Select
            className="w-32"
            classPrefix="!p-0.5 !p-2 !px-3"
            name="sort"
            set={setfilter}
            options={["createdAt", "username", "email"]}
            list={["Date", "Username", "Email"]}
          />
          <Select
            className="w-20"
            classPrefix="!p-0.5 !p-2 !px-3"
            name="limit"
            set={setfilter}
            options={[40, 20, 10]}
          />
        </div>
      </article>

      {loading && !users.length ? (
        <div className="w-full h-96 grid place-content-center">
          <div className="w-16 h-16 loader" />
        </div>
      ) : (
        <article className=" my-4  h-[1000px] scroll-thin  min-w-[1000px] overflow-x-auto scroll-thin">
          <TR className="sticky top-0  group">
            <TH className="rounded-tl-lg">Username</TH>
            <TH>Email</TH>
            <TH>Created At</TH>
            <TH>Phone Number</TH>
            <TH>State</TH>
            <TH className="rounded-tr-lg">Actions</TH>
          </TR>
          {users?.users?.map((u) => (
            <>
              {[...Array(1)].map(() => (
                <TR className=" ">
                  <TH className="py-1">{u.username}</TH>
                  <TH>{u.email}</TH>
                  <TH>{new Date(u.createdAt).toISOString().split("T")[0]}</TH>
                  <TH>{u.phoneNumber}</TH>
                  <TH>{u.state}</TH>
                  <TH>
                    <div className="flex gap-2 justify-center items-center min-w-full">
                      <Dropdown
                        component={
                          <div className="p-1.5 bg-black/5 hover:bg-black/20 rounded-md">
                            <MdMoreHoriz className="text-3xl relative !z-0 hover:text-black" />
                          </div>
                        }
                        direction={{ x: "right", y: "bottom" }}
                        chevron={false}
                        className="w-56 p-2 bg-white rounded-lg border border-black/20  shadow-xl shadow-black/30"
                      >
                        <div className="text-lg font-bold tracking-wide">
                          <button
                            onClick={() => setmdl(true)}
                            //   onDoubleClick={() => DeleteHandler(o._id)}
                            className=" pl-4 py-2 hover:bg-black/10 items-center flex gap-3 w-full text-left rounded-md  disabled:opacity-50 cursor-pointer "
                          >
                            <MdLocalShipping className="text-2xl" /> Send
                            Package
                          </button>

                          <div className="w-full h-px my-1.5 bg-black/20" />
                          <button
                            disabled={u.isAdmin}
                            onClick={() => DeleteHandler(u._id)}
                            className="pl-4 py-2 hover:bg-black/10 items-center flex gap-3 w-full text-left rounded-md text-red-600 disabled:opacity-50 cursor-pointer hover:text-red-700"
                          >
                            {false ? (
                              <div className="loader w-6 h-6 !border-t-red-600 !border-white" />
                            ) : (
                              <>
                                <MdDelete className="text-2xl" /> Delete User
                              </>
                            )}
                          </button>
                        </div>
                      </Dropdown>{" "}
                    </div>
                    <ZrSend
                      open={mdl}
                      setopen={setmdl}
                      o={{ user: { _id: u._id } }}
                    />
                    {/* <button
                      disabled={u.isAdmin}
                      onDoubleClick={() => DeleteHandler(u._id)}
                      className="py-1 rounded-lg text-sm disabled:opacity-60 disabled:cursor-not-allowed hover:text-red-600 hover:bg-white border-red-600 border w-full bg-red-600 text-white"
                    >
                      Remove
                    </button> */}
                  </TH>
                </TR>
              ))}
            </>
          ))}
        </article>
      )}
    </section>
  );
}

export const TH = ({ className, children }) => (
  <th
    className={` p-3 pl-4 border-b whitespace border grid items-center  text-start border-b-black/30 group:border-black group-[]:bg-[#D9D9D9] group-[]:border-b-black   ${className}`}
  >
    {children}
  </th>
);

export const TR = ({ children, className }) => (
  <tr
    className={`break-all  grid grid-cols-[1fr_2.5fr_1fr_1.5fr_1fr_1fr] ${className}`}
  >
    {children}
  </tr>
);

export default Users;
