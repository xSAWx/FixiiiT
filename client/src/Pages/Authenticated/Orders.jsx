import React, { useState } from "react";
import { useGetMyOrders } from "../../Hooks/useOrder";
import moment from "moment"; // Import moment.js
import { MdDelete } from "react-icons/md";
import { BsEyeFill, BsFilePdfFill } from "react-icons/bs";
import Order from "./Order";
import Modal from "../../Components/common/Modal";

function Orders() {
  const { orders, loading, err } = useGetMyOrders();

  const [order, setorder] = useState();
  const [mdl, setmdl] = useState(false);

  return loading ? (
    <section className="grid w-full h-full place-content-center">
      <div className="!w-16 !h-16 loader !border-8 " />
    </section>
  ) : (
    <section className="grid w-full gap-6">
      <h1 className="title !text-4xl self-start">Orders</h1>

      <aside className="grid grid-cols-[1fr_1.6fr_2fr_1.6fr_1.6fr_2fr] overflow-auto max-h-[600px]  my-auto border border-black/20 p-0.5 gap-0.5">
        {["Order", "Item", "Date", "Status", "Total", "Action"].map((e) => (
          <div className="p-2 px-4 text-xl text-black/70 font-extrabold border border-black/20">
            {e}
          </div>
        ))}

        {orders?.map((order, i) => (
          <>
            {/* ORDER  */}
            <div
              onClick={() => {
                setorder({ _id: order._id, i });
                setmdl(true);
              }}
              className="p-2 px-4 cursor-pointer grid place-content-center text-black/60 font-medium border line-clamp-1 text-base border-black/20"
            >
              <h1 className="line-clamp-1 w-11/12 text-tertiary font-bold mx-auto">
                #{i + 1}
              </h1>
            </div>

            {/* ITEM  */}
            <div className="p-2 px-4 grid items-center text-black/60 font- border line-clamp-1 text-base border-black/20">
              {order.item.name}
            </div>

            {/* DATE  */}
            <div className="p-2 px-4  text-black/60 min-w-36 border line-clamp-1 text-base border-black/20">
              {moment(order.createdAt).fromNow()}
            </div>

            {/* STATUS  */}
            <div className="p-2 px-4  text-black/60 font- border line-clamp-1 text-base border-black/20">
              {order.status}
            </div>

            {/* PRICE  */}
            <div className="p-2 px-4  text-black/60 font- border line-clamp-1 text-base border-black/20">
              {order.totalPrice} DA
            </div>

            {/* ACTION  */}
            <div className="flex p-2 border border-black/20 items-center justify-between">
              <BsEyeFill className="text-3xl text-black/70 mx-1 cursor-pointer  duration-300 hover:scale-105" />
              <BsFilePdfFill className="text-3xl text-black/70 mx-1 cursor-pointer  duration-300 hover:scale-105" />
              <MdDelete className="text-4xl text-red-600 mx-1 cursor-pointer   hover:rotate-12 duration-300 hover:scale-110" />
            </div>
          </>
        ))}
      </aside>

      <Modal onClose={setmdl} open={mdl} closabel={false}>
        <Order order={orders.find((e) => e._id === order?._id)} i={order?.i} setmdl={setmdl} />
      </Modal>
    </section>
  );
}

export default Orders;
