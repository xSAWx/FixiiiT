import React, { useState } from "react";
import {
  MdContentCopy,
  MdDelete,
  MdEdit,
  MdRemove,
  MdVisibility,
} from "react-icons/md";
import { useClipboard } from "../../Utils/utils";
import { TH } from "./Users";
import { TR } from "./Orders";
import { useDeleteOrderById, useUpdateOrder } from "../../Hooks/useOrder";
import Modal from "../../Components/common/Modal";

function Order({ o, getAll }) {
  const { copyToClipboard, isCopied } = useClipboard();
  const [credentials, setcredentials] = useState({
    status: o.status,
    totalPrice: o.totalPrice || 0,
  });
  const [mdl, setmdl] = useState(false);
  const { loading: LDelete, Delete } = useDeleteOrderById();
  const { loading: LUpdate, Update } = useUpdateOrder();

  // DELETE
  const DeleteHandler = async () => {
    await Delete(o._id);
    await getAll();
  };

  // UPDATE
  const handleUpdate = async () => {
    await Update(o._id, credentials);
    await getAll();
  };

  return (
    <>
      <TR>
        {/* ID  */}
        <TH>
          <button
            className="grid hover:scale-110 duration-200 justify-center cursor-pointer"
            onClick={() => copyToClipboard(o._id)}
          >
            <MdContentCopy className="line-clamp-1 text-center mx-auto" />
            <p className="text-xs">{isCopied === o._id ? "copied" : "copy"}</p>
          </button>
        </TH>

        {/* IMAGE  */}
        <TH className="justify-center">
          <img
            onClick={() => setmdl(true)}
            src={o.image}
            className="max-h-12 cursor-pointer max-w-full"
          />
        </TH>

        {/* STATUS  */}
        <TH className="">
          <input
            style={{
              color: color(credentials.status),
              backgroundColor: `${color(credentials.status)}55`,
            }}
            className="rounded-md outline-none w-full h-10 text-lg py-1 text-center line-clamp-1"
            value={credentials.status}
            onChange={(e) =>
              setcredentials({ ...credentials, status: e.target.value })
            }
            onKeyDown={(e) => {
              e.key === "Enter" && handleUpdate();
              e.key === "Delete" && DeleteHandler();
            }}
          />
        </TH>

        {/* DATE  */}
        <TH className="break-normal">
          {new Date(o.createdAt).toISOString().split("T")[0]}
        </TH>

        {/* CATEGORY  */}
        <TH>{o.item.category.name}</TH>

        {/* ITEM  */}
        <TH>{o.item.name}</TH>

        {/* TOTAL PRICE  */}
        <TH>
          <div className="flex gap-1 items-center">
            <input
              type="number"
              className="rounded-md outline-none w-8/12 h-10  py-1 line-clamp-1"
              value={credentials.totalPrice}
              onChange={(e) =>
                setcredentials({
                  ...credentials,
                  totalPrice: Number(e.target.value),
                })
              }
              onKeyDown={(e) => {
                e.key === "Enter" && handleUpdate();
              }}
            />
            <p className="text-xs">DA</p>
          </div>
        </TH>

        {/* ACTION  */}
        <TH>
          <div className="flex gap-2 justify-center min-w-full">
            <button
              disabled={o.isAdmin}
              onDoubleClick={DeleteHandler}
              className=" rounded-lg text-2xl text-center w-10 h-10 grid place-content-center disabled:opacity-60 disabled:pointer-events-none hover:text-red-600 hover:bg-white border-red-600 border  bg-red-600 text-white"
            >
              {LDelete ? (
                <div className="loader w-7 h-7 !border-t-red-600" />
              ) : (
                <MdDelete />
              )}
            </button>
            <button
              onClick={handleUpdate}
              disabled={
                credentials.status === o.status &&
                credentials.totalPrice === o?.totalPrice
              }
              //   onDoubleClick={() => DeleteHandler(o._id)}
              className=" rounded-lg text-2xl text-center w-10 h-10 grid place-content-center disabled:pointer-events-none disabled:opacity-60  hover:text-blue-600 hover:bg-white border-blue-600 border  bg-blue-600 text-white"
            >
              {LUpdate ? (
                <div className="loader w-7 h-7 !border-t-blue-600" />
              ) : (
                <MdEdit />
              )}
            </button>
            <button
              //   onDoubleClick={() => DeleteHandler(o._id)}
              className=" rounded-lg text-2xl text-center w-10 h-10 grid place-content-center disabled:pointer-events-none disabled:opacity-60  hover:text-gray-600 hover:bg-white border-gray-600 border  bg-gray-600 text-white"
            >
              <MdVisibility />
            </button>
          </div>
        </TH>
      </TR>
      <Modal closabel={false} onClose={setmdl} open={mdl}>
        <img src={o?.image} className="max-h-[75vh] max-w-[75vw]" />
      </Modal>
    </>
  );
}

const color = (status) => {
  const s = status.toLowerCase();
  switch (s) {
    case "cancelled":
      return "#dc2626";

    case "shipping":
    case "delivered":
      return "#16a34a";
    case "pending":
    case "proccessing":
      return "#ca8a04";

    default:
      return "#888888";
  }
};

export default Order;
