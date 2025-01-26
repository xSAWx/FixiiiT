import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetItem } from "../../../Hooks/useItem";
import { useGetCategories } from "../../../Hooks/useCategory";
import Select from "../../../Components/common/Select";
import Input from "../../../Components/common/Input";
import { modules } from "../Categories/AddCategory";
import ReactQuill from "react-quill";
import { Option } from "./CreateItem";

function EditItem() {
  const { _id } = useParams();
  const { item, opts } = useGetItem(_id);
  const { categories } = useGetCategories();

  const [credentials, setcredentials] = useState({
    name: "",
    description: "",
    category: "",
    price: 0,
  });
  const [options, setoptions] = useState([]);
  const [opCount, setopCount] = useState(1);
  
  useEffect(() => {
    setcredentials({
      name: item?.name,
      description: item?.description,
      category: item?.category,
      price: item?.price,
    });
    setoptions(opts);
    setopCount(opts.length);
  }, [item]);

  console.log({ options });

  return (
    <>
      {" "}
      <aside className="flex w-full justify-between items-center mb-6">
        <h1 className="text-fif lg:text-3xl text-2xl ">Create Item</h1>
        <Select
          list={categories?.map((c) => c.name)}
          set={setcredentials}
          name="category"
          options={categories?.map((c) => c._id)}
          className="w-44"
          value={credentials?.category?._id}
        />
      </aside>
      <aside className="grid grid-cols-5 gap-4 mb-6">
        <Input
          //   err={err.name}
          set={setcredentials}
          name="name"
          placeholder="Add Item Name"
          title="Item Name*"
          className="col-span-4"
          value={credentials?.name}
        />
        <Input
          set={setcredentials}
          name="name"
          placeholder="Item Price "
          title="Item Price (DA)"
          className="col-span-1"
          type="number"
          value={credentials.price}
        />
      </aside>
      <aside>
        <h1 className="font-semibold text-current tracking-widest text-base mb-2 ml-1">
          Item Description
        </h1>
        <ReactQuill
          modules={modules}
          theme="snow"
          value={credentials?.description}
          onChange={(e) => {
            setcredentials({
              name: item?.name,
              description: item?.description,
              category: item?.category,
              price: item?.price,
              description: e,
            });
          }}
          className="h-60 mb-8"
        />
      </aside>
      {/* //! OPTIONS /!!  */}
      <aside className="flex justify-between mt-16 pr-2 items-center mb-6">
        <h1 className="text-fif lg:text-3xl text-2xl ">Create Options</h1>
        <button
          disabled={opCount === 10}
          onClick={() => setopCount(opCount + 1)}
          className="px-4 py-1.5 rounded-lg disabled:pointer-events-none disabled:opacity-40 hover:bg-white hover:text-blue-600 text-white border-blue-600 bg-blue-600  border"
        >
          Add Option
        </button>
      </aside>
      <aside className=" grid gap-4">
        {[...Array(opCount)].map((_, i) => (
          <Option
            i={i}
            setopCount={setopCount}
            setoptions={setoptions}
            options={options}
            opCount={opCount}
          />
        ))}
      </aside>
      <button
        // onClick={handleCreate}
        className="Button mt-6 group !text-base w-40"
      >
        {true ? (
          <div className="w-6 h-6 !border-t-white mx-auto group-hover:!border-t-tertiary loader" />
        ) : (
          "Create Item"
        )}
      </button>
    </>
  );
}

export default EditItem;
