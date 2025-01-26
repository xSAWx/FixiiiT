import React, { useEffect, useState } from "react";
import Input from "../../../Components/common/Input";
import { useGetCategories } from "../../../Hooks/useCategory";
import Select from "../../../Components/common/Select";
import ReactQuill from "react-quill";
import { modules } from "../Categories/AddCategory";
import { useCreateItem } from "../../../Hooks/useItem";
import { MdDelete } from "react-icons/md";

function CreateItem() {
  const { categories } = useGetCategories();
  const { create, loading: loading2, err } = useCreateItem();

  const [credentials, setcredentials] = useState({
    name: "",
    description: "",
    category: "",
    price: 0,
  });

  const [options, setoptions] = useState([]);

  const [opCount, setopCount] = useState(1);

  useEffect(() => {
    setcredentials({ ...credentials, category: categories[0]?._id });
  }, [categories]);

  const handleCreate = async () => {
    await create(
      credentials,
      options.filter((e) => e !== undefined)
    );
  };

  return (
    <>
      <aside className="flex w-full justify-between items-center mb-6">
        <h1 className="text-fif lg:text-3xl text-2xl ">Create Item</h1>
        <Select
          list={categories?.map((c) => c.name)}
          set={setcredentials}
          name="category"
          options={categories?.map((c) => c._id)}
          className="w-44"
        />
      </aside>
      <aside className="grid grid-cols-5 gap-4 mb-6">
        <Input
          err={err.name}
          set={setcredentials}
          name="name"
          placeholder="Add Item Name"
          title="Item Name*"
          className="col-span-4"
        />
        <Input
          set={setcredentials}
          name="name"
          placeholder="Item Price "
          title="Item Price (DA)"
          className="col-span-1"
          type="number"
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
              ...credentials,
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
        onClick={handleCreate}
        className="Button mt-6 group !text-base w-40"
      >
        {loading2 ? (
          <div className="w-6 h-6 !border-t-white mx-auto group-hover:!border-t-tertiary loader" />
        ) : (
          "Create Item"
        )}
      </button>
    </>
  );
}

export const Option = ({ i, setopCount, setoptions, options, opCount }) => {
  return (
    <aside className="grid grid-cols-12 gap-2">
      <Input
        value={options[i]?.name}
        onChange={(e) =>
          setoptions((o) => {
            const update = [...o];
            update[i] = { ...o[i], name: e.target.value };
            return update;
          })
        }
        className="col-span-2"
        placeholder="Option Name*"
      />
      <Input
        value={options[i]?.price}
        onChange={(e) =>
          setoptions((o) => {
            const update = [...o];
            update[i] = { ...o[i], price: e.target.value };
            return update;
          })
        }
        className="col-span-1"
        placeholder="Price"
        type="number"
      />
      <Input
        value={options[i]?.description}
        onChange={(e) =>
          setoptions((o) => {
            const update = [...o];
            update[i] = { ...o[i], description: e.target.value };
            return update;
          })
        }
        className="col-span-8"
        placeholder="Option Description"
      />
      {i || opCount !== 1 ? (
        <button
          onClick={() => {
            setopCount((e) => e - 1);
            setoptions((o) =>
              o.filter((x) => !x?.name).filter((_, index) => index !== i)
            );
          }}
          className="w-full h-full text-white text-3xl hover:bg-white hover:text-red-600 grid place-content-center bg-red-600 rounded-md border border-red-600"
        >
          <MdDelete />
        </button>
      ) : (
        <></>
      )}
    </aside>
  );
};

export default CreateItem;
