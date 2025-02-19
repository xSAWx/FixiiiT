import React, { useEffect, useState } from "react";
import { useGetOneUser, useUpdateUser } from "../../../Hooks/useSign";
import Modal from "../../../Components/common/Modal";
import { MdClose } from "react-icons/md";
import Input from "../../../Components/common/Input";
import Select from "../../../Components/common/Select";
import { wilayas } from "../../../Components/forms/ShippingAddress";

function EditUserModal({ _id, setmodal, modal }) {
  const { user, loading, getOne } = useGetOneUser(_id);
  const [credentials, setcredentials] = useState({});

  console.log(_id);

  const { update, loading: Uloading } = useUpdateUser(_id);

  useEffect(() => {
    getOne();
  }, [_id]);

  useEffect(() => {
    setcredentials(user);
  }, [user]);

  const handler = async (e) => {
    e.preventDefault();
    await update(credentials);
    await getOne();
  };

  console.log(credentials);

  return (
    <div>
      <Modal onClose={setmodal} open={modal} className="">
        <form
          onSubmit={handler}
          className="md:w-[700px] w-screen max-h-[95svh]  bg-white text-lg rounded-xl min-h-96 grid grid-rows-[auto_1fr_auto]"
        >
          <header className="w-full border-b border-black/20 sticky top-0 rounded-xl z-20 bg-white grid grid-cols-8 items-center py-5">
            <div></div>
            <div className="col-span-6 text-center text-2xl font-bold tracking-wide">
              Edit User Profile{" "}
            </div>
            <MdClose
              onClick={() => setmodal(false)}
              className="text-3xl text-red-600 hover:scale-110 justify-self-end mr-4 duration-200 cursor-pointer"
            />
          </header>

          <section className="overflow-y-auto p-4 px-6 space-y-6">
            <aside className="grid grid-cols-2 gap-4">
              <Input
                title="First Name"
                placeholder="First Name"
                name="firstName"
                value={credentials?.firstName}
                set={setcredentials}
              />
              <Input
                title="Last Name"
                placeholder="Last Name"
                name="lastName"
                value={credentials?.lastName}
                set={setcredentials}
              />
            </aside>

            <aside className="grid md:grid-cols-2 gap-4">
              <Input
                title="Phone Number"
                placeholder="Phone Number"
                name="phoneNumber"
                value={credentials?.phoneNumber}
                set={setcredentials}
              />
              <Input
                title="Password"
                placeholder="Password"
                name="password"
                value={credentials?.password}
                set={setcredentials}
              />
            </aside>

            <aside className="grid md:grid-cols-4 gap-2">
              <Select
                // err={err?.state}
                options={[...Array(58)].map((_, i) => `${i + 1}`)}
                list={wilayas}
                name="state"
                set={setcredentials}
                title="State"
                classPrefix="h-[54px] !text-base"
                value={credentials?.state}
              />
              {/* City  */}
              <Input
                set={setcredentials}
                value={credentials?.city}
                name="city"
                title="City"
                placeholder="Enter The City Name"
              />
              <Input
                set={setcredentials}
                value={credentials?.streetAddress1}
                name="streetAddress1"
                title="Street Address"
                placeholder="Enter Adresse"
              />
              <Input
                set={setcredentials}
                value={credentials?.postalCode}
                name="postalCode"
                title="Postal Code"
                placeholder="postalCode"
              />
            </aside>

            <aside className="grid md:grid-cols-3 gap-2">
              {/* City  */}
              <Input
                set={setcredentials}
                value={credentials?.email}
                name="email"
                title="Email"
                placeholder="Enter Email"
              />
              <Input
                set={setcredentials}
                value={credentials?.username}
                name="username"
                title="Username"
                placeholder="Enter Username"
              />
              <Select
                options={["normal", "super"]}
                name="role"
                set={setcredentials}
                title="Role"
                classPrefix="h-[54px] !text-base"
                value={credentials?.role}
              />
            </aside>
          </section>

          <footer className="px-6 mt-4 rounded-xl border-t py-3 border-black/20">
            <button
              type="submit"
              disabled={
                !credentials?.phoneNumber ||
                !credentials?.state ||
                !credentials?.city ||
                !credentials?.streetAddress1 ||
                !credentials?.username ||
                !credentials?.password ||
                !credentials?.email ||
                (credentials?.email === user?.email &&
                  credentials?.state === user?.state &&
                  credentials?.city === user?.city &&
                  credentials?.streetAddress1 === user?.streetAddress1 &&
                  credentials?.username === user?.username &&
                  credentials?.password === user?.password &&
                  credentials?.firstName === user?.firstName &&
                  credentials?.lastName === user?.lastName &&
                  credentials?.postalCode === user?.postalCode &&
                  credentials?.role === user?.role)
              }
              className="Button w-full !text-base "
            >
              {Uloading ? (
                <div className="w-6 h-6  !border-t-white mx-auto group-hover:!border-t-tertiary loader" />
              ) : (
                "Edit User"
              )}
            </button>
          </footer>
        </form>
      </Modal>
    </div>
  );
}

export default EditUserModal;
