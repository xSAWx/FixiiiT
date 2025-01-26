import React from "react";
import { Outlet } from "react-router-dom";

function ItemLayout() {
  return (
    <section className="border-2 border-black/20 p-8 font-bold tracking-wide rounded-lg min-h-96">
      <Outlet />
    </section>
  );
}

export default ItemLayout;
