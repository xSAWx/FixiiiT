import React, { useEffect, useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdContentCopy,
  MdSearch,
} from "react-icons/md";
import Input from "../../../Components/common/Input";
import { useCreateCoils, useGetAllOrders } from "../../../Hooks/useOrder";
import { useGetCategories } from "../../../Hooks/useCategory";
import Select from "../../../Components/common/Select";
import { TH } from "../Users";
import { useClipboard } from "../../../Utils/utils";
import Order from "./Order";
import { useGetAllItems } from "../../../Hooks/useItem";
import Checkbox from "../../../Components/common/Checkbox";

function Orders() {
  const [filter, setfilter] = useState({
    page: 1,
    limit: 40,
    item: "",
    sort: "createdAt",
  });

  const { items } = useGetAllItems();
  const { orders, getAll } = useGetAllOrders({ filter });
  const [selectOrder, setselectOrder] = useState([]);

  const { createMany, loading: Cloading } = useCreateCoils();

  useEffect(() => {
    setselectOrder([]);
  }, [orders]);

  const sendHandler = async () => {
    await createMany(selectOrder);
    setselectOrder([]);
  };

  return (
    <section className="border-2 border-black/20  scroll-thin rounded-xl max-w-[100vw] overflow-auto min-h-96 p-4">
      <article className="flex justify-between">
        <aside className="flex gap-1 items-center text-3xl text-black/80">
          <button
            disabled={filter.page === 1}
            className="hover:bg-black/10 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-black/0 rounded-full p-1"
            onClick={() =>
              setfilter({ ...filter, page: page !== 1 ? page - 1 : page })
            }
          >
            <MdChevronLeft />
          </button>
          <button
            disabled={filter.page === orders?.pages?.total}
            onClick={() => setfilter({ ...filter, page: page + 1 })}
            className="hover:bg-black/10 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-black/0 rounded-full p-1 "
          >
            <MdChevronRight />
          </button>
          <input
            value={filter.page}
            onChange={(e) =>
              setfilter({
                ...filter,
                page: Math.max(
                  1,
                  Math.min(e.target.value, orders?.pages?.total)
                ),
              })
            }
            type="number"
            max={orders?.pages?.total || 1}
            className="w-6 outline-tertiary text-lg py-1.5 mx-auto text-center"
          />

          <p className="text-lg">/ {orders?.pages?.total}</p>
          <Input
            set={setfilter}
            name="search"
            icon={<MdSearch />}
            classs="h-[44px]"
            className="!w-40 ml-4"
            wait={true}
          />
        </aside>

        <aside className="flex gap-4">
          <button
            onClick={sendHandler}
            disabled={selectOrder.length < 2}
            className="w-32 h-full border disabled:opacity-40 duration-200 disabled:pointer-events-none border-blue-600 rounded-lg text-white bg-blue-600 font-bold text-[17px] hover:text-blue-600 hover:bg-white"
          >
            Send Colis
          </button>
          <Select
            className="w-32"
            classPrefix="!p-0.5 !p-2 !px-3"
            name="item"
            set={setfilter}
            options={["", ...items?.map((c) => c._id)]}
            list={["No Item", ...items?.map((c) => c.name)]}
          />
          <Select
            className="w-40"
            classPrefix="!p-0.5 !p-2 !px-3"
            name="sort"
            set={setfilter}
            options={["createdAt", "updatedAt", "totalPrice"]}
            list={["Created Date", "Updated Date", "Price"]}
          />
          <Select
            className="w-20"
            classPrefix="!p-0.5 !p-2 !px-3"
            name="limit"
            set={setfilter}
            options={[40, 20, 10]}
          />
        </aside>
      </article>

      {/* //! TABLE !//  */}

      <article className=" my-4  h-[2000px] scroll-thin  min-w-[1000px] overflow-x-auto ">
        <TR className="sticky top-0 z-40   group ">
          <TH className="rounded-tl-lg justify-center">
            <Checkbox
              check={selectOrder.length}
              onChange={() => {
                selectOrder.length
                  ? setselectOrder([])
                  : setselectOrder(orders?.orders.map((o) => o._id));
              }}
            />
          </TH>
          <TH className="rounded-tl-lg justify-center"># ID</TH>
          <TH className="flex justify-center">Image</TH>
          <TH className="justify-center">Status</TH>
          <TH>Created At</TH>
          <TH>Category</TH>
          <TH>Item</TH>
          <TH>Price</TH>
          <TH className="rounded-tr-lg">Actions</TH>
        </TR>
        {orders?.orders?.map((u) => (
          <Order
            setSelect={setselectOrder}
            select={selectOrder}
            key={u._id}
            o={u}
            getAll={getAll}
          />
        ))}
      </article>
    </section>
  );
}

export const TR = ({ children, className }) => (
  <tr
    className={`break-all    grid grid-cols-[0.4fr_.5fr_1fr_1fr_1fr_.8fr_1fr_.8fr_.7fr] ${className}`}
  >
    {children}
  </tr>
);

export default Orders;
