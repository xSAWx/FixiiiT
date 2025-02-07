import React from "react";
import { MdClose } from "react-icons/md";
import { addressSlice } from "../../Store/user";
import { Link } from "react-router-dom";

function Order({ setmdl, order, i }) {
  console.log({ order });
  const { address } = addressSlice();

  console.log({ address });

  return (
    <section className="w-[600px] max-w-[95vw] max-h-[90dvh] bg-white  rounded-lg border border-black/40">
      {/* HEADER  */}
      <article className="flex justify-between items-center px-6 py-4 border-b border-black/30 ">
        <h1 className="title !text-3xl ">ORDER #{i + 1}</h1>
        <aside className="flex gap-4 items-center">
          <div
            style={{
              color: color(order?.status),
              backgroundColor: `${color(order?.status)}66`,
            }}
            className="px-6 py-2 rounded-xl font-semibold text-lg bg-yellow-600 bg-opacity-30"
          >
            {order?.status}
          </div>
          <MdClose
            onClick={() => setmdl(false)}
            className="text-3xl text-gray-600 hover:text-red-600 duration-200 cursor-pointer hover:scale-110 "
          />
        </aside>
      </article>

      {/* BODY  */}
      <article className="p-3 px-8 pt-6 overflow-y-auto h-[55dvh]   ">
        <h1 className="title md:!text-2xl !text-[22px] mb-4">
          Order Details :
        </h1>
        <aside className=" gap-y-3 grid font-medium text-black/70 text-[17px] tracking-wide">
          <Line title="Order Id :">{order?._id}</Line>
          <Line title="Category :">{order?.item?.category?.name}</Line>
          {order?.serialNumber && (
            <Line title="Serial Number :">{order?.serialNumber}</Line>
          )}
          {order?.options?.map((o, i) => (
            <Line title={`Option  #${i + 1} :`}>
              {o?.name}{" "}
              {o?.price && (
                <span className="text-black/60">({o?.price} DA)</span>
              )}
            </Line>
          ))}
          {order?.Tracking && (
            <Line title="Tracking Number :">{order?.Tracking}</Line>
          )}

          {order?.node && <Line title="Note :">{order?.node}</Line>}

          <h1 className="title md:!text-2xl !text-[22px] mt-4">
            Billing Address :
          </h1>
          <Line title="Full Name :">
            {address?.firstName + " " + address?.lastName}
          </Line>
          <Line title="Email :">{address?.email}</Line>
          <Line title="Phone Number :">{address?.phoneNumber}</Line>
          <Line title="State :">{address?.state}</Line>
          <Line title="City :">{address?.city}</Line>
          <Line title="Street 1 :">{address?.streetAddress1}</Line>
          {address?.streetAddress2 && (
            <Line title="Street 2 :">{address?.streetAddress2}</Line>
          )}
          <Line title="Postal Code :">{address?.postalCode}</Line>
        </aside>
      </article>

      {/* FOOTER  */}
      <article className="w-full border-t border-black/30 p-3 px-6 flex justify-end gap-4">
        <Link
          onClick={() => {
            setmdl(false);
          }}
          to="/myaccount/addresses"
          className="Button !px-8"
        >
          Edit
        </Link>
        <button onClick={() => setmdl(false)} className="Button !px-8">
          Continue
        </button>
      </article>
    </section>
  );
}

const Line = ({ title, children }) => (
  <div className="w-full grid grid-cols-[1fr_2fr]">
    <h1 className="text-black font-bold">{title}</h1>
    <h2 className="max-w-96 line-clamp-1">{children}</h2>
  </div>
);

export const color = (status) => {
  const s = status.toLowerCase();
  switch (s) {
    case "cancelled":
      return "#dc2626";

    case "shipped":
    case "delivered":
      return "#16a34a";
    case "pending":
    case "processing":
      return "#ca8a04";

    default:
      return "#888888";
  }
};

export default Order;
