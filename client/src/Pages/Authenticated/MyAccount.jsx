import React, { useEffect, useState } from "react";
import { useLogout } from "../../Hooks/useSign";
import ShippingAddress from "../../Components/forms/ShippingAddress";
import ChangePassword from "../../Components/forms/ChangePassword";
import BreadCrumbs from "../../Components/common/BreadCrumbs";
import Orders from "./Orders";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

function MyAccount() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { logout, loading } = useLogout();

  const handler = async () => {
    logout();
  };

  useEffect(() => {
    if (pathname === "/myaccount") navigate("/myaccount/orders");
  }, [pathname]);

  return (
    <>
      <BreadCrumbs
        navs={["Home", "My Account"]}
        routes={["/", "/myaccount "]}
        title="My Account"
      />
      <section className="lg:w-11/12 w-10/12 max-w-7xl mx-auto my-20 gap-12 grid md:grid-cols-[2fr_5fr] font-semibold">
        <article className="w-full h-80 border grid   border-black/20 p-6 rounded-lg">
          <Tab to="orders"  title="Orders" />
          <Tab to="addresses"  title="Addresses" />
          <Tab
            to="changepassword"
            title="Change Password"
          />
          <Tab
            to=""
            onClick={handler}
            title={loading ? <div className="loader w-4 h-4" /> : "Logout"}
          />
        </article>
        <article className="w-full min-h-96 border p-6 border-black/20 rounded-lg">
          <Outlet />
          
        </article>
      </section>
    </>
  );
}

const Tab = ({   title = "", to, onClick }) => {
  const { pathname } = useLocation();
  const pth = pathname?.split("/")[2];

  return (
    <Link
      to={to}
      onClick={() => {
        onClick && onClick();
      }}
      className={`w-full rounded-sm text-black/60 mb-3 items-center flex text-base font-medium tracking-wider py-2.5 px-6 hover:bg-tertiary hover:text-white duration-300 cursor-pointer ${
        pth === to && "text-white bg-tertiary"
      }`}
    >
      {title}
    </Link>
  );
};

export default MyAccount;
