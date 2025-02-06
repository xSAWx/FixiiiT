import React, { useRef, useState } from "react";
import { useDeleteOrder, useGetMyOrders } from "../../Hooks/useOrder";
import moment from "moment"; // Import moment.js
import { MdDelete } from "react-icons/md";
import { BsEyeFill, BsFilePdfFill } from "react-icons/bs";
import Order from "./Order";
import Modal from "../../Components/common/Modal";
import { PiFilePdfFill } from "react-icons/pi";
import OrderInvoic from "./OrderInvoic";
import html2pdf from "html2pdf.js";

function Orders() {
  const { orders, loading, err, getOrders } = useGetMyOrders();
  const { Delete } = useDeleteOrder();

  const [order, setorder] = useState();
  const ord = orders.find((e) => e._id === order?._id);
  const [mdl, setmdl] = useState(false);
  const [suremdl, setsuremdl] = useState(false);

  const handleDelete = async () => {
    await Delete(order._id);
    getOrders();
    setsuremdl(false);
  };

  const invoiceRef = useRef();

  const handleDownload = () => {
    const options = {
      margin: 10,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(invoiceRef.current).set(options).save();
  };

  return loading ? (
    <section className="grid w-full h-full place-content-center">
      <div className="!w-16 !h-16 loader !border-8 " />
    </section>
  ) : (
    <section className="grid w-full gap-6">
      {orders.length ? (
        <>
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
                <div className="p-2 px-4 grid items-center text-black/60 min-w-36 border line-clamp-1 text-base border-black/20">
                  {moment(order.createdAt).fromNow()}
                </div>

                {/* STATUS  */}
                <div className="p-2 px-4 grid items-center text-black/60 font- border line-clamp-1 text-base border-black/20">
                  {order.status}
                </div>

                {/* PRICE  */}
                <div className="p-2 px-4 items-center flex text-black/60 font- border line-clamp-1 text-base border-black/20">
                  {order.totalPrice} DA
                </div>

                {/* ACTION  */}
                <div className="flex p-2 border border-black/20 items-center justify-between">
                  <BsEyeFill
                    onClick={() => {
                      setorder({ _id: order._id, i });
                      setmdl(true);
                    }}
                    className="text-3xl text-black/70 mx-1 cursor-pointer  duration-300 hover:scale-105"
                  />
                  <PiFilePdfFill
                    onClick={() => {
                      setorder({ _id: order._id, i });
                      handleDownload();
                    }}
                    className="text-3xl text-black/70 mx-1 cursor-pointer  duration-300 hover:scale-105"
                  />
                  <MdDelete
                    onClick={() => {
                      setorder({ _id: order._id, i });
                      setsuremdl(true);
                    }}
                    className="text-4xl text-red-600 mx-1 cursor-pointer   hover:rotate-12 duration-300 hover:scale-110"
                  />
                </div>
              </>
            ))}
          </aside>
        </>
      ) : (
        <></>
      )}

      <Modal onClose={setmdl} open={mdl} closabel={false}>
        <Order
          order={orders.find((e) => e._id === order?._id)}
          i={order?.i}
          setmdl={setmdl}
        />
      </Modal>

      <Modal onClose={setsuremdl} open={suremdl} closabel={false}>
        <aside className="w-[600px] p-6 px-8 max-w-[90vw] bg-white rounded-lg font-bold tracking-wide text-black/80">
          <h1 className="md:text-3xl mb-4  text-2xl font-bold tracking-wide ">
            Are You Sure ?
          </h1>
          <h2 className=" text-lg text-black/60 mb-6">
            you want to cancel this order ?
          </h2>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setsuremdl(false)}
              className="px-6 py-2  text-lg rounded-md "
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-6 py-2 text-white text-lg rounded-md bg-red-600 hover:text-red-600 border border-red-600  hover:bg-white"
            >
              Delete
            </button>
          </div>
        </aside>
      </Modal>
      <div className="hidden">
        <OrderInvoic
          invoiceRef={invoiceRef}
          order={orders.find((e) => e._id === order?._id)}
        />
      </div>
    </section>
  );
}

export default Orders;
