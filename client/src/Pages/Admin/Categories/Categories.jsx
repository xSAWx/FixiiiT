import React, { useState } from "react";
import Input from "../../../Components/common/Input";
import { useGetCategories } from "../../../Hooks/useCategory";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";

function Categories() {
  const { categories } = useGetCategories();
  
  return (
    <>
      <h1 className="text-fif lg:text-3xl text-2xl mb-6">Categories</h1>

      <article className="grid lg:grid-cols-3 gap-y-10">
        <>
          {categories.map((c) => (
            <Categ c={c} />
          ))}
        </>
        <Link to="/admin/category/addcategory" className="place-self-center group cursor-pointer hover:scale-95 duration-200">
          <div className="h-72 border place-self-center border-tertiary  hover:bg-black/10 aspect-square rounded-md grid place-content-center">
            <MdAddCircle className="text-6xl text-tertiary group-hover:rotate-90 duration-200" />
          </div>
          <h1 className="text-center text-xl mt-1">Add Category</h1>
        </Link>
      </article>
    </>
  );
}

const Categ = ({ c }) => {
  return (
    <Link to={`/admin/category/${c._id}`} className="place-self-center group cursor-pointer hover:scale-95 duration-200">
      <img
        src={c.image}
        className="lg:h-72 h-60 aspect-square group- duration-200 rounded-md object-cover"
      />
      <h1 className="text-center text-xl mt-1">{c.name}</h1>
    </Link>
  );
};

export default Categories;
