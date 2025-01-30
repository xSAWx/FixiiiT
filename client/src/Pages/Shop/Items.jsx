import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemsByCategory, useGetOption } from "../../Hooks/useItem";
import Select from "../../Components/common/Select";
import Accordion from "../../Components/common/Accordion";
import Checkbox from "../../Components/common/Checkbox";
import TextArea from "../../Components/common/TextArea";
import { MdImage } from "react-icons/md";
import Input from "../../Components/common/Input";
import { useCreateOrder } from "../../Hooks/useOrder";
import Modal from "../../Components/common/Modal";
import ShippingAddress from "../../Components/forms/ShippingAddress";
import ReactQuill from "react-quill";

function Items() {
  const { _id } = useParams();
  const { items, err } = getItemsByCategory(_id);

  const [credentials, setcredentials] = useState({
    options: [],
    img: "",
    serialNumber: "",
    node: "",
    item: items[0]?._id,
  });

  const [mdl, setmdl] = useState(false);

  useEffect(() => {
    setcredentials({ ...credentials, item: items[0]?._id });
  }, [items]);

  const { options, loading } = useGetOption(credentials.item);

  const itm = items.find((e) => credentials.item === e._id);

  const { create } = useCreateOrder(setmdl);

  const submitHandler = async (e) => {
    e.preventDefault();
    await create(credentials);
  };

  return (
    <form onSubmit={submitHandler} className="my-10 ">
      <Select
        options={items?.map((e, i) => e._id)}
        list={items?.map((e, i) => e.name)}
        name="item"
        set={setcredentials}
        title="Item"
        className="max-w-96 mb-8"
      />
      <ReactQuill
        value={itm?.description}
        readOnly={true}
        theme="bubble"
        className="-mx-3 -mb-16"
      />

      {/* OPTIONS  */}

      {loading ? (
        <></>
      ) : (
        <aside className="my-8 grid gap-6">
          <h2 className="md:text-3xl text-2xl  font-bold text-fif ">
            Services Available :
          </h2>
          {options?.map((opt) => (
            <Accordion
              title={
                <div className="flex gap-3 items-center">
                  <div onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      check={credentials?.options?.find((e) => e === opt._id)}
                      onChange={() => {
                        credentials?.options.find((e) => e === opt._id)
                          ? setcredentials({
                              ...credentials,
                              options: credentials.options.filter(
                                (e) => e !== opt._id
                              ),
                            })
                          : setcredentials({
                              ...credentials,
                              options: [...credentials.options, opt._id],
                            });
                      }}
                      className="relative z-20"
                    />
                  </div>
                  <h1 className="">
                    {opt.name}{" "}
                    <span className="text-base ml-8 text-black/70">
                      started from ({opt.price || 0} DA)
                    </span>
                  </h1>
                </div>
              }
              className={`text-xl text-black/90 tracking-wide p-4 border border-black/20 rounded-lg ${
                credentials?.options?.find((e) => e === opt._id) &&
                "border-tertiary"
              }`}
            >
              <div className="pt-4 px-5 text-[17px] font-medium text-black/70">
                {opt.description || "No Description"}
              </div>
            </Accordion>
          ))}

          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <TextArea
              rows={7}
              title="OTHER NOTES (optional)"
              placeholder="Description of your problem "
              className="h-60 max-h-60 min-h-60"
              set={setcredentials}
              name="node"
            ></TextArea>
            <div className="">
              <h1 className="text-black/90 font-semibold tracking-wider text-[17px] mb-2 ml-1">
                Add Image (optional)
              </h1>
              <div className="relative h-60 grid place-content-center overflow-hidden text-6xl text-black/60  border border-black/50 cursor-pointer hover:bg-black/10 rounded-lg">
                {credentials.img ? (
                  <img
                    src={URL.createObjectURL(credentials.img)}
                    className="!object-cover h-60 min-w-96"
                  />
                ) : (
                  <>
                    <MdImage />
                  </>
                )}
                <input
                  onChange={(e) =>
                    setcredentials({ ...credentials, img: e.target.files[0] })
                  }
                  type="file"
                  className="absolute w-full h-full opacity-0 z-10 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <Input
            title="Item Seriel Number"
            name="serialNumber"
            set={setcredentials}
          />
          <button className="Button !px-6 ">Place An Order</button>
        </aside>
      )}
      <Modal className="bg-white p-8 rounded-lg" onClose={setmdl} open={mdl}>
        <ShippingAddress setmdl={setmdl} />
      </Modal>
    </form>
  );
}

export default Items;
