import React from "react";
import { useGetMyOrders } from "../../Hooks/useOrder";
import moment from "moment"; // Import moment.js
import { MdDelete } from "react-icons/md";

function Orders() {
  const { orders, loading, err } = useGetMyOrders();
  console.log(orders);

  return loading ? (
    <section className="grid w-full h-full place-content-center">
      <div className="!w-16 !h-16 loader !border-8 " />
    </section>
  ) : (
    <section className="grid w-full gap-6">
      <h1 className="title !text-4xl self-start">Orders</h1>

      <aside className="grid grid-cols-[2fr_2fr_4fr_2fr_3fr]  my-auto border border-black/20 p-0.5 gap-0.5">
        {["OrderId", "Date", "Status", "Total", "Action"].map((e) => (
          <div className="p-2 px-4 text-xl text-black/70 font-extrabold border border-black/20">
            {e}
          </div>
        ))}

        {orders?.map((order) => (
          <>
            <div className="p-2 px-4 cursor-pointer text-black/60 font-medium border line-clamp-1 text-sm border-black/20">
              <h1 className="line-clamp-1 w-11/12 text-tertiary font-bold">{order._id}</h1>
            </div>
            <div className="p-2 px-4  text-black/60 font- border line-clamp-1 text-base border-black/20">
              {moment(order.createdAt).fromNow()}
            </div>
            <div className="p-2 px-4  text-black/60 font- border line-clamp-1 text-base border-black/20">
              {order.status}
            </div>
            <div className="p-2 px-4  text-black/60 font- border line-clamp-1 text-base border-black/20">
              {order.totalPrice} DA
            </div>
            <div className="flex  items-center justify-between">
                <button className="Button w-8/12">view</button>
                <MdDelete className="text-4xl text-red-600 mx-1 cursor-pointer   hover:rotate-12 duration-300 hover:scale-105"/>
            </div>
          </>
        ))}
      </aside>
    </section>
  );
}

export default Orders;
