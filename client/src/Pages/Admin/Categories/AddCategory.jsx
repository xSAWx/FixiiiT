import React, { useState } from "react";
import Input from "../../../Components/common/Input";
import { MdImage } from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useCreateCategory } from "../../../Hooks/useCategory";

function AddCategory() {
  const [credentials, setcredentials] = useState({
    name: "",
    image: "",
    description: "",
  });

  const { loading, create, err } = useCreateCategory();

  const createHandler = async () => {
    await create(credentials);
  };

  return (
    <>
      <h1 className="text-fif md:text-3xl text-2xl mb-8">
        Create New Category
      </h1>
      <Input
        err={err.name}
        set={setcredentials}
        name="name"
        title="Category Name"
        placeholder="Add Category Name"
        className="md:w-9/12 mb-8"
      />
      <article className="grid md:grid-cols-3">
        <div className="mb-8 md:justify-self-start justify-self-center">
          <h1 className="ml-1 mb-2 tracking-widest text-black/80">
            Category Image
          </h1>
          <aside className="relative h-72 w-72 border  rounded-md text-6xl text-black/60 border-black/20 grid place-content-center hover:bg-black/10">
            <input
              type="file"
              onChange={(e) =>
                setcredentials({ ...credentials, image: e.target.files[0] })
              }
              accept=".jpg, .jpeg, .png"
              className="absolute opacity-0 w-full h-full cursor-pointer "
            />
            {!credentials.image ? (
              <>
                <MdImage />
              </>
            ) : (
              <img
                src={URL.createObjectURL(credentials.image)}
                className="rounded-md absolute w-72 h-72 pointer-events-none object-cover border border-black/20"
              />
            )}
          </aside>
          {err.image && (
            <p className="text-red-600 text-sm mt-1">{err.image}</p>
          )}
        </div>
        <div className="md:col-span-2">
          <h1 className="ml-1 mb-2 tracking-widest text-black/80">
            Category Description
          </h1>
          <ReactQuill
            modules={modules}
            theme="snow"
            value={credentials.description}
            onChange={(e) => {
              setcredentials({ ...credentials, description: e });
            }}
            className="h-[245px] "
          />
          {err.description && (
            <p className="text-red-600 text-sm mt-12">{err.description}</p>
          )}
        </div>
      </article>
      <button
        onClick={createHandler}
        className="Button !text-base group !px-8 "
      >
        {loading ? (
          <div className="loader w-8 h-8 mx-auto !border-t-white group-hover:!border-t-tertiary" />
        ) : (
          "Add Category"
        )}
      </button>
    </>
  );
}

export default AddCategory;

export const modules = {
  toolbar: [
    [{ size: ["small", "medium", "large", "huge"] }],

    ["bold", "italic", "underline"],
    [{ align: [] }],
    ["link"],
    [{ color: [] }],
    ["blockquote"],
  ],
};
