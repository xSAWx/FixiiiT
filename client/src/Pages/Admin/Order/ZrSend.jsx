import React, { useEffect, useState } from "react";
import Modal from "../../../Components/common/Modal";
import { MdClose } from "react-icons/md";
import { useGetOneUser } from "../../../Hooks/useSign";
import Input from "../../../Components/common/Input";
import TextArea from "../../../Components/common/TextArea";
import Checkbox from "../../../Components/common/Checkbox";
import Select from "../../../Components/common/Select";
import { wilayas } from "../../../Components/forms/ShippingAddress";
import { useCreateCoil, useGetTracking } from "../../../Hooks/useOrder";

function ZrSend({ open, setopen, o }) {
  return (
    <Modal open={open} onClose={setopen}>
      <MDL o={o} setopen={setopen} />
    </Modal>
  );
}

const MDL = ({ o, setopen }) => {
  const { user, loading, getOne } = useGetOneUser(
    o?.Tracking ? "" : o?.user?._id
  );
  const { tracking, loading: Tloading } = useGetTracking(o?.Tracking);
  const { create, loading: Cloading } = useCreateCoil();

  const [credentials, setcredentials] = useState({
    Client: "",
    MobileA: "",
    Adresse: "",
    Commune: "",
    Note: "Fragil",
    Total: "",
    TProduit: "",
    Confrimee: "",
    TypeColis: "0",
    TypeLivraison: "0",
    IDWilaya: "1",
  });

  useEffect(() => {
    getOne();
  }, [o]);

  useEffect(() => {
    if (user)
      setcredentials({
        ...credentials,
        Client: user?.firstName,
        MobileA: user?.phoneNumber,
        Adresse: user?.streetAddress1,
        Commune: user?.city,
        Note: user?.node,
        Total: o?.totalPrice,
        IDWilaya: user?.state,
      });
    if (tracking)
      setcredentials({
        Client: tracking?.Client,
        MobileA: tracking?.MobileA,
        Adresse: tracking?.Adresse,
        Commune: tracking?.Commune,
        Note: tracking?.Note,
        Total: o?.totalPrice,
        IDWilaya: tracking?.IDWilaya,
        Tracking: o?.TRK,
      });

    console.log({ tracking, credentials });
  }, [user, tracking]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create(credentials, o._id);
    setopen(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[600px] w-screen  bg-white text-lg rounded-xl pb-5"
    >
      <header className="w-full border-b border-black/20 sticky top-0 rounded-xl z-20 bg-white grid grid-cols-8 items-center py-5">
        <div className=""></div>
        <div className="col-span-6 text-center text-2xl font-bold tracking-wide">
          Add Package{" "}
        </div>
        <MdClose
          onClick={() => setopen(false)}
          className="text-3xl text-red-600 hover:scale-110 justify-self-end mr-4 duration-200 cursor-pointer"
        />
      </header>

      <article className="px-8 mt-6 grid gap-6 max-h-[70dvh] overflow-auto scroll-thin">
        {/* CLIENT  */}
        <Input
          set={setcredentials}
          value={credentials?.Client}
          name="Client"
          title="Client"
          placeholder="Enter Client Name"
        />
        {/* PHONE NUMBER  */}
        <aside className="grid grid-cols-4 gap-6">
          <Input
            set={setcredentials}
            value={credentials?.MobileA}
            name="MobileA"
            title="Phone Number"
            placeholder="Enter Phone Number"
            className="col-span-3"
          />
          <Input
            set={setcredentials}
            value={credentials?.Total}
            name="Total"
            title="Price"
            placeholder="Enter Price"
            type="number"
          />
        </aside>
        {/* ADDRESS  */}
        <aside className="grid grid-cols-2 gap-6">
          <Select
            // err={err?.state}
            options={[...Array(58)].map((_, i) => `${i + 1}`)}
            list={wilayas}
            name="IDWilaya"
            set={setcredentials}
            title="State"
            classPrefix="h-[54px] !text-base"
            value={credentials.IDWilaya}
          />
          {/* City  */}
          <Input
            set={setcredentials}
            value={credentials?.Commune}
            name="Commune"
            title="City"
            placeholder="Enter The City Name"
          />
        </aside>
        <Input
          set={setcredentials}
          value={credentials?.Adresse}
          name="Adresse"
          title="Street Address"
          placeholder="Enter Adresse"
        />

        <aside className="grid grid-cols-2 gap-6">
          <TextArea
            name="TProduit"
            set={setcredentials}
            title="Product"
            placeholder="Exmple : Sac a Dos (1) + Usb ( 1 )"
            className="max-h-32"
            rows={2}
            value={credentials?.TProduit}
          />
          <TextArea
            name="Note"
            set={setcredentials}
            title="Note"
            placeholder="Add A Note"
            className="max-h-32"
            rows={2}
            value={credentials.Note}
          />
        </aside>

        <aside className="grid grid-cols-3 gap-4">
          <Checkbox
            check={credentials.TypeLivraison === "1"}
            onChange={() =>
              setcredentials({
                ...credentials,
                TypeLivraison: credentials.TypeLivraison === "1" ? "0" : "1",
              })
            }
            text={"Stopdesk"}
          />
          <Checkbox
            check={credentials.TypeColis === "1"}
            onChange={() =>
              setcredentials({
                ...credentials,
                TypeColis: credentials.TypeColis === "1" ? "0" : "1",
              })
            }
            text="TypeColis Normal"
            className="justify-self-center"
          />
          <Checkbox
            check={credentials.Confrimee === "1"}
            onChange={() =>
              setcredentials({
                ...credentials,
                Confrimee: credentials.Confrimee === "1" ? "" : "1",
              })
            }
            text="Confrime"
            className="justify-self-end ml-auto"
          />
        </aside>
      </article>
      <div className="px-6 mt-6 rounded-xl border-t pt-6 border-black/20">
        <button
          type="submit"
          disabled={
            !credentials.Client ||
            !credentials.MobileA ||
            !credentials.Adresse ||
            !credentials.Commune ||
            !credentials.Total ||
            !credentials.TProduit
          }
          className="Button w-full !text-base "
        >
          {Cloading ? (
            <div className="w-6 h-6 !border-t-white mx-auto group-hover:!border-t-tertiary loader" />
          ) : (
            "Send Package"
          )}
        </button>
      </div>
    </form>
  );
};

export default ZrSend;
