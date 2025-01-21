import React from "react";
import BreadCrumbs from "../../Components/common/BreadCrumbs";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Admin() {
  
  return (
    <section>
      <BreadCrumbs navs={["ADMIN"]} routes={["/admin"]} title="ADMIN" />
      <nav className="my-20 grid max-w-[1400px] md:w-[96%] mx-auto gap-2 md:grid-cols-[1fr_4.5fr] ">
        <Sidebar />
        <div>
            <Outlet />
        </div>
      </nav>
    </section>
  );
}

export default Admin;
