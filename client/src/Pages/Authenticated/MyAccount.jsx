import React, { useState } from "react";
import { useLogout } from "../../Hooks/useSign";
import ShippingAddress from "../../Components/forms/ShippingAddress";
import ChangePassword from "../../Components/forms/ChangePassword";
import BreadCrumbs from "../../Components/common/BreadCrumbs";
import Orders from "./Orders";

function MyAccount() {
  const [tab, settab] = useState("Addresses");
  
  const { logout, loading } = useLogout();

  const handler = async () => {
    logout();
  };

  return (
    <>
      <BreadCrumbs
        navs={["Home", "My Account"]}
        routes={["/", "/myaccount "]}
        title="My Account"
      />
      <section className="lg:w-11/12 w-10/12 max-w-7xl mx-auto my-20 gap-12 grid md:grid-cols-[2fr_5fr] font-semibold">
        <article className="w-full h-96 border border-black/20 p-6 rounded-lg">
          <Tab tab={tab} settab={settab} title="Dashboard" />
          <Tab tab={tab} settab={settab} title="Orders" />
          <Tab tab={tab} settab={settab} title="Addresses" />
          <Tab tab={tab} settab={settab} title="Change Password" />
          <Tab
            onClick={handler}
            tab={tab}
            settab={settab}
            title={loading ? <div className="loader w-4 h-4" /> : "Logout"}
          />
        </article>
        <article className="w-full min-h-96 border p-6 border-black/20 rounded-lg">
          {tab === "Addresses" && <ShippingAddress />}
          {tab === "Change Password" && <ChangePassword />}
          {tab === "Orders" && <Orders />}
        </article>
      </section>
    </>
  );
}

const Tab = ({ tab, settab, title = "", onClick }) => (
  <aside
    onClick={() => {
      settab(title);
      onClick && onClick();
    }}
    className={`w-full rounded-sm text-black/60 mb-3 text-base font-medium tracking-wider py-2.5 px-6 hover:bg-tertiary hover:text-white duration-300 cursor-pointer ${
      title === tab && "text-white bg-tertiary"
    }`}
  >
    {title}
  </aside>
);

export default MyAccount;
