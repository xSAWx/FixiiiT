import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-black.png";
import logoW from "../../assets/logo-white.png";
import { MdClose, MdMenu, MdPhoneInTalk } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "../common/Dropdown";
import { LuShoppingBag } from "react-icons/lu";
import Portal from "./Portal";
import { set } from "mongoose";
import Accordion from "../common/Accordion";

function Navbar() {
  const { pathname: p } = useLocation();
  const [open, setopen] = useState(false);
  return (
    <nav className="mx-auto absolute left-1/2 -translate-x-1/2 z-40   flex w-[calc(100%-80px)] max-w-[1760px] md:-translate-y-[30%] bg-white shadow-xl -translate-y-3.5 rounded-lg  h-[72px] md:h-20  ">
      <aside className="flex w-full px-8 items-center">
        <img src={logo} className="mr-12" />
        <ul className="lg:flex hidden group-[]: gap-5 2xl:text-[16px] text-sm tracking-wide  font-semibold text-qua ">
          <Li to={"/"}>HOME</Li>

          {/* OWNER  SERVICE  */}
          <Dropdown
            chevron="-translate-y-0.5"
            direction={{ x: "left", y: "bottom" }}
            className={""}
            component={
              <li className="flex gap-1 items-center text-current hover:text-tertiary">
                OWNER-SERVICE
              </li>
            }
          >
            <aside className="w-60  bg-white  shadow-xl shadow-black/30 rounded-md translate-y-6 p-4 grid gap-2">
              <Li to="/shop">I Need Repair</Li>
              <Li to="/cart">Cart</Li>
              <Li to="/myaccount">My Account</Li>
            </aside>
          </Dropdown>

          {/* PAGES  */}
          <Dropdown
            chevron="-translate-y-0.5"
            direction={{ x: "left", y: "bottom" }}
            component={
              <li className="flex gap-1 items-center hover:text-tertiary">
                PAGES
              </li>
            }
          >
            <aside className="w-60  bg-white  shadow-xl shadow-black/30 rounded-md translate-y-6 p-4 grid gap-2">
              <Li to="/faq">FAQ</Li>
              <Li to="/privacy-policy">Privacy Policy</Li>
              <Li to="/terms-conditions">Terms & Conditions</Li>
            </aside>
          </Dropdown>

          {/* COMPANY  */}
          <Dropdown
            chevron="-translate-y-0.5"
            direction={{ x: "left", y: "bottom" }}
            component={
              <li className="flex gap-1 items-center hover:text-tertiary">
                COMPANY
              </li>
            }
          >
            <aside className="w-60  bg-white  shadow-xl shadow-black/30 rounded-md translate-y-6 p-4 grid gap-2">
              <Li to="/about-us">About Us</Li>
              <Li to="/our-team">Our Team</Li>
            </aside>
          </Dropdown>

          <Li to="/mailin">MAIL-IN</Li>
          <Li to="/blog">BLOG</Li>
          <Li to="/contact">CONTACT</Li>
        </ul>
      </aside>

      <aside className="flex gap-5 items-center mr-6 text-[26px] text-qua">
        <Link
          to="/cart"
          className={`relative cursor-pointer group  ${
            p === "/cart" && "text-tertiary"
          }`}
        >
          <LuShoppingBag />
          <div className="absolute right-0 top-0 h-4 w-4 grid duration-200 group-hover:bg-tertiary place-content-center rounded-full translate-x-1.5 -translate-y-1 bg-black text-[9px] text-white">
            0
          </div>
        </Link>

        <MdMenu
          onClick={() => setopen(true)}
          className="cursor-pointer text-3xl hover:scale-105 duration-200 md:hidden block "
        />
      </aside>

      <aside className="xl:flex hidden   h-full px-6 gap-2 items-center text-tertiary bg-secondary rounded-r-lg">
        <span className="h-9 cursor-pointer w-9 hover:text-tertiary hover:bg-white rounded-full duration-300 text-xl text-white grid place-content-center bg-tertiary">
          <MdPhoneInTalk className="translate-x-px" />
        </span>
        <h1 className="text-xl font-bold tracking-wide">0673142128</h1>
      </aside>
      <SideNav open={open} setopen={setopen} />
    </nav>
  );
}

const Li = ({ to, children }) => {
  const { pathname } = useLocation();
  console.log({ pathname });

  return (
    <Link
      to={to}
      className={`hover:text-tertiary duration-200 ${
        pathname === to && "text-tertiary text font-extrabold scale-105"
      }`}
    >
      {children}
    </Link>
  );
};

const SideNav = ({ open, setopen }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    setopen(false);
  }, [pathname]);
  return (
    <Portal>
      <section
        className={`fixed grid top-0 z-[999] duration-300 w-full h-full overflow-hidden 
            ${open ? "visible bg-black/60" : "invisible"}
            `}
        onClick={() => setopen(false)}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className={`absolute justify-self-end duration-500 h-dvh w-screen py-2 max-w-[420px] bg-white
            ${!open && "translate-x-full"}`}
        >
          {/* HEADER  */}
          <header className=" p-3 px-6 w-full border-b flex justify-between items-center">
            <img src={logoW} className="" />
            <MdClose
              className="text-red-600 hover:scale-105 text-3xl cursor-pointer duration-200"
              onClick={() => setopen(false)}
            />
          </header>

          {/* LIST  */}

          <article className="p-6 text-black grid gap-4">
            <Li to="/qsd">HOME</Li>

            {/* OWNER SERVICE  */}
            <Accordion className="text-qua" title="OWNER SERVICE">
              <aside className="grid gap-2.5  px-4 py-2">
                <Li to="/shop">About Us</Li>
                <Li to="/cart">Our Team</Li>
                <Li to="/myaccount">Cart</Li>
              </aside>
            </Accordion>

            {/* PAGES  */}
            <Accordion className="text-qua" title="PAGES">
              <aside className="grid gap-2.5  px-4 py-2">
                <Li to="/faq">FAQ</Li>
                <Li to="/privacy-policy">Privacy Policy</Li>
                <Li to="/terms-conditions">Terms & Conditions</Li>
              </aside>
            </Accordion>

            {/* COMPANY  */}
            <Accordion className="text-qua" title="COMPANY">
              <aside className="grid gap-2.5  px-4 py-2">
                <Li to="/about-us">About Us</Li>
                <Li to="/our-team">Our Team</Li>
              </aside>
            </Accordion>
            <Li to="/mailin">MAIL-IN</Li>
            <Li to="/blog">BLOG</Li>
            <Li to="/contact">CONTACT</Li>
          </article>
        </nav>
      </section>
    </Portal>
  );
};

export default Navbar;
