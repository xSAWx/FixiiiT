import React, { useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdContentCopy,
  MdSearch,
} from "react-icons/md";
import Input from "../../Components/common/Input";
import { useGetAllOrders } from "../../Hooks/useOrder";
import { useGetCategories } from "../../Hooks/useCategory";
import Select from "../../Components/common/Select";
import { TH } from "./Users";
import { useClipboard } from "../../Utils/utils";
import Order from "./Order";

function Orders() {
  const [filter, setfilter] = useState({
    page: 1,
    limit: 40,
    category: "",
    item: "",
  });

  const { orders, getAll } = useGetAllOrders({ filter });
  const { categories } = useGetCategories();

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
          <Select
            className="w-32"
            classPrefix="!p-0.5 !p-2 !px-3"
            name="category"
            set={setfilter}
            options={categories?.map((c) => c._id)}
            list={categories?.map((c) => c.name)}
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

      <article className=" my-4  max-h-[500px]  ">
        <TR className="sticky -top-4 z-50  group">
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
          <Order key={u._id} o={u} getAll={getAll} />
        ))}
      </article>
    </section>
  );
}

export const TR = ({ children, className }) => (
  <tr
    className={`break-all  line-clamp-1 overflow-hidden grid grid-cols-[.5fr_1fr_1fr_1fr_.8fr_1fr_.8fr_1fr] ${className}`}
  >
    {children}
  </tr>
);

export default Orders;
