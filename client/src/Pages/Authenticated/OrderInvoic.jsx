import React from "react";
import logB from "../../assets/logo-black.png";
import { addressSlice } from "../../Store/user";

function OrderInvoic({ invoiceRef, order }) {
  const { address } = addressSlice();
  console.log({ order });

  const ord = {
    category: order?.item?.category?.name,
    item: order?.item?.name,
    serialnumber: order?.serialNumber,
    note: order?.node,
  };
  return (
    <section className="flex justify-center max-w-6xl mx-auto mt-20 items-center min-h-screen bg-gray-100 p-4">
      <article
        ref={invoiceRef}
        className="w-full  bg-white shadow-lg font-semibold text-black/70 rounded-lg p-14"
      >
        {/* Invoice content */}
        <aside className="flex justify-between items-center mb-14">
          <img src={logB} className="w-24" />
          <h1 className="text-black text-lg font-bold">
            Fix iiiT
            <h2 className="text-base text-black/70">
              Algeria, Oum El Bouaghi , Ain Beida
            </h2>
          </h1>
        </aside>

        {/* ADDRESS  */}
        <aside className="w-full grid grid-cols-[2fr_1fr]">
          <div className="">
            <h1 className="text-2xl mb-4 text-black font-black tracking-wide">
              INVOICE
            </h1>
            <div className="grid grid-cols-[1fr_2fr] text-sm">
              {Object.keys(address).map((e, i) => (
                <>
                  <h1>{e} : </h1>
                  <h2>{Object.values(address)[i]}</h2>
                </>
              ))}
            </div>
          </div>

          {/* DATE */}
          <div className="grid grid-cols-2 text-sm place-content-start gap-1.5 my-12 justify-start">
            <h1>ORDER ID:</h1> <h2>{order?._id}</h2>
            <h1>ORDER DATE: </h1>{" "}
            <h2>
              {new Date(order?.createdAt || 0).toISOString().split("T")[0]}
            </h2>
            <h1>INVOICE DATE: </h1>{" "}
            <h2>{new Date().toISOString().split("T")[0]}</h2>
          </div>
        </aside>

        {/* PRODUCT  */}
        <aside className="w-full grid grid-cols-[2fr_1fr] mt-10">
          <div>
            <h1 className="text-2xl mb-4 text-black font-black tracking-wide">
              ORDER
            </h1>
            <div className="grid grid-cols-[1fr_2fr] gap-1 text-sm">
              <>
                {Object.keys(ord).map((e, i) => (
                  <>
                    <h1>{e} : </h1>
                    <h2 className="">{Object.values(ord)[i]}</h2>
                  </>
                ))}
                {order?.options?.map((o, i) => (
                  <>
                    <h1>Option #{i} : </h1>
                    <h2 className="">{o?.name}</h2>
                  </>
                ))}
                {order?.Tracking && (
                  <>
                    {order?.Tracking && (
                      <>
                        <h1>Tracking Number :</h1>
                        <h2 className="">{order?.Tracking}</h2>
                      </>
                    )}
                  </>
                )}
              </>
            </div>
          </div>

          <div className=" place-self-end text-black">Price : N/A</div>
        </aside>
      </article>
    </section>
  );
}

export default OrderInvoic;
