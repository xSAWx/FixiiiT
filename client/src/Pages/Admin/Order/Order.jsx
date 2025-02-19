import { useState } from "react";
import {
  MdCheck,
  MdClose,
  MdContentCopy,
  MdContentPaste,
  MdDelete,
  MdDeliveryDining,
  MdEdit,
  MdLocalShipping,
  MdMoreHoriz,
  MdVisibility,
} from "react-icons/md";
import { useClipboard } from "../../../Utils/utils";
import { TH } from "../User/Users";
import { TR } from "./Orders";
import {
  useDeleteOrderById,
  useGetOrder,
  useUpdateOrder,
} from "../../../Hooks/useOrder";
import Modal from "../../../Components/common/Modal";
import { addressSlice } from "../../../Store/user";
import Dropdown from "../../../Components/common/Dropdown";
import ZrSend from "./ZrSend";
import Checkbox from "../../../Components/common/Checkbox";

function Order({ o, getAll, setSelect, select }) {
  const { copyToClipboard, isCopied } = useClipboard();
  const [credentials, setcredentials] = useState({
    status: o?.status,
    totalPrice: o?.totalPrice || 0,
  });
  const [mdl, setmdl] = useState(false);
  const [Zrmdl, setZrmdl] = useState(false);
  const { loading: LDelete, Delete } = useDeleteOrderById();
  const { loading: LUpdate, Update } = useUpdateOrder();

  // DELETE
  const DeleteHandler = async () => {
    await Delete(o?._id);
    await getAll();
  };

  // UPDATE
  const handleUpdate = async () => {
    await Update(o?._id, credentials);
    await getAll();
  };

  return (
    <>
      <TR>
        <TH>
          <div className="grid place-content-center">
            <Checkbox
              check={select.find((e) => e === o?._id)}
              onChange={() => {
                setSelect((s) =>
                  s.find((e) => e === o?._id)
                    ? s.filter((e) => e !== o?._id)
                    : [...s, o?._id]
                );
              }}
            />
          </div>
        </TH>

        {/* ID  */}
        <TH>
          <button
            className="grid hover:scale-110 duration-200 relative text-2xl mx-auto rounded-md hover:bg-black/20 text-black/80 w-10 h-10 justify-center cursor-pointer"
            onClick={() => copyToClipboard(o?._id)}
          >
            <MdContentPaste
              className={`absolute left-1/2 top-1/2 -translate-y-1/2  -translate-x-1/2 scale-0  duration-200 ${
                isCopied !== o?._id && "scale-100 delay-200"
              }`}
            />
            <MdCheck
              className={`absolute left-1/2 top-1/2 -translate-y-1/2  -translate-x-1/2 scale-0  duration-200 ${
                isCopied === o?._id && "scale-100 delay-200"
              }`}
            />
          </button>
        </TH>

        {/* IMAGE  */}
        <TH className="justify-center">
          <img
            onClick={() => setmdl(true)}
            src={o?.image}
            className="max-h-12 cursor-pointer max-w-full"
          />
        </TH>

        {/* STATUS  */}
        <TH className="">
          <input
            list="status-list"
            style={{
              color: color(credentials.status),
              backgroundColor: `${color(credentials.status)}55`,
            }}
            className="rounded-md outline-none appearance-none w-full pl-6 h-10 text-lg py-1 text-center line-clamp-1"
            value={credentials.status}
            onChange={(e) =>
              setcredentials({ ...credentials, status: e.target.value })
            }
            onKeyDown={(e) => {
              e.key === "Enter" && handleUpdate();
              e.key === "Delete" && DeleteHandler();
            }}
          />
          <datalist id="status-list">
            {["pending", "processing", "shipped", "delivered", "cancelled"].map(
              (option, index) => (
                <option key={index} value={option} />
              )
            )}
          </datalist>
        </TH>

        {/* DATE  */}
        <TH className="break-normal">
          {new Date(o?.createdAt).toISOString().split("T")[0]}
        </TH>

        {/* CATEGORY  */}
        <TH>{o?.item?.category?.name}</TH>

        {/* ITEM  */}
        <TH>{o?.item?.name}</TH>

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
                <OrderDetails o={o} />

                <button
                  onClick={handleUpdate}
                  disabled={
                    credentials.status === o?.status &&
                    credentials.totalPrice === o?.totalPrice
                  }
                  className="pl-4 py-2 hover:bg-black/10 items-center flex gap-3 w-full text-left rounded-md disabled:opacity-50 cursor-pointer"
                >
                  {LUpdate ? (
                    <div className="loader w-7 h-7 !border-t-blue-600 !border-white" />
                  ) : (
                    <>
                      <MdEdit className="text-2xl" /> Edit Order
                    </>
                  )}
                </button>

                <button
                  onClick={() => setZrmdl(true)}
                  //   onDoubleClick={() => DeleteHandler(o?._id)}
                  className=" pl-4 py-2 hover:bg-black/10 items-center flex gap-3 w-full text-left rounded-md  disabled:opacity-50 cursor-pointer "
                >
                  <MdLocalShipping className="text-2xl" /> Send Package
                </button>

                <div className="w-full h-px my-1.5 bg-black/20" />
                <button
                  onClick={DeleteHandler}
                  className="pl-4 py-2 hover:bg-black/10 items-center flex gap-3 w-full text-left rounded-md text-red-600 disabled:opacity-50 cursor-pointer hover:text-red-700"
                >
                  {LDelete ? (
                    <div className="loader w-6 h-6 !border-t-red-600 !border-white" />
                  ) : (
                    <>
                      <MdDelete className="text-2xl" /> Delete Order
                    </>
                  )}
                </button>
              </div>
            </Dropdown>
          </div>
        </TH>
      </TR>

      <ZrSend open={Zrmdl} setopen={setZrmdl} o={o} />

      <Modal closabel={false} onClose={setmdl} open={mdl}>
        <img src={o?.image} className="max-h-[75vh] max-w-[75vw]" />
      </Modal>
    </>
  );
}

export const OrderDetails = ({ o }) => {
  const [mdl, setmdl] = useState(false);

  return (
    <>
      <button
        onClick={() => setmdl(true)}
        //   onDoubleClick={() => DeleteHandler(o?._id)}
        className=" pl-4 py-2 hover:bg-black/10 items-center flex gap-3 w-full text-left rounded-md  disabled:opacity-50 cursor-pointer "
      >
        <MdVisibility className="text-2xl" /> Order Details
      </button>
      <Modal onClose={setmdl} open={mdl} closabel={false}>
        <MDL o={o} set={setmdl} />
      </Modal>
    </>
  );
};

const MDL = ({ o, set }) => {
  const { order, loading } = useGetOrder(o?._id);
  const { address } = addressSlice();

  return (
    <article className="max-h-[90dvh] max-w-[95vw] w-[650px]  overflow-auto scroll-thin rounded-lg min-h-96 bg-white  border-fif">
      {/* HEADER  */}
      <header className="w-full grid sticky top-0 bg-white grid-cols-5 p-4 pb-2 max-h-16 items-center ">
        <span></span>
        <h1 className="title md:!text-2xl text-lg col-span-3 text-center">
          {o?.item.name}
        </h1>
        <MdClose
          onClick={() => set(false)}
          className="text-xl hover:scale-105 duration-200 hover:text-red-600 cursor-pointer justify-self-end"
        />
      </header>

      {/* IMAGE  */}
      <div>
        {o?.image && (
          <>
            <img
              src={o?.image}
              className="max-h-72 w-10/12 mx-auto object-cover mb-4 shadow-lg shadow-black/40 rounded-md"
            />
          </>
        )}
        <div className="w-10/12 py-px my-2 mx-auto bg-black/40 rounded-lg " />

        {/* ORDER DETAILS  */}
        <aside className="grid mx-auto w-10/12 mt-4  font-semibold ">
          <h1 className="text-tertiary font-bold">Order Details</h1> <h2></h2>
          <Data data={o?._id}>Order Id :</Data>
          <Data data={order?.item?.category?.name}>Category :</Data>
          <Data data={o?.item.name}>Item :</Data>
          <Data data={`${o?.totalPrice} DA`}>PRICE :</Data>
          {o?.options?.length ? (
            o?.options?.map((oo, i) => (
              <Data key={oo} data={oo}>
                Option #{i + 1}
              </Data>
            ))
          ) : (
            <></>
          )}
          <Data data={<p style={{ color: color(o?.status) }}>{o?.status}</p>}>
            Status :
          </Data>
          <Data data={<p>{order?.node}</p>}>Note :</Data>
        </aside>

        <div className="w-10/12 py-px my-5 mx-auto bg-black/40 rounded-lg " />

        {/* BILLING DETAILS  */}
        <aside className="grid mx-auto w-10/12 mt-4  font-semibold ">
          <h1 className="text-tertiary font-bold">Billing Details</h1> <h2></h2>
          {order?.user &&
            Object.keys(address).map((e, i) => (
              <Data data={Object.values(address)[i]}>{e} : </Data>
            ))}
        </aside>
      </div>
      <div className="flex w-full justify-center">
        <button
          onClick={() => set(false)}
          className="Button  w-10/12 my-4 !py-1"
        >
          Close
        </button>
      </div>
    </article>
  );
};

const color = (status) => {
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

const Data = ({ children, data = "", className }) => (
  <div className="-my-1 flex w-full justify-between text-black/70 items-center">
    <h1>{children}</h1>

    <h2 className="justify-self-end my-2">{data} </h2>
  </div>
);

export default Order;
