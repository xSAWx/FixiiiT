import React from "react";
import { useGetAllItems } from "../../../Hooks/useItem";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";

function Items() {
  const { getItems, items, loading } = useGetAllItems();
  return !loading ? (
    <>
      <aside className="flex justify-between items-center mb-6">
        <h1 className="text-fif lg:text-3xl text-2xl ">Items</h1>
        <Link to={"/admin/items/newItem"} className="px-6 py-1.5 rounded-lg hover:bg-white hover:text-blue-600 text-white border-blue-600 bg-blue-600 text-lg border">New Item</Link>
        </aside>
      <article className="grid md:grid-cols-2 gap-6">
        {items?.map((i) => (
          <ItemCard i={i} key={i._id} getItems={getItems} />
        ))}
      </article>
    </>
  ) : (
    <div className="grid  w-full  h-96 place-content-center">
      <div className="w-16 h-16 !border-8 loader" />
    </div>
  );
}



export default Items;
