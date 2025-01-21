import React from "react";
import {
  MdCategory,
  MdComputer,
  MdGroup,
  MdRequestQuote,
  MdSettings,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  return (
    <nav className=" py-4  gap-2">
      <Nav to="" icon={<MdSettings />} title="General" />
      <Nav to="users" icon={<MdGroup />} title="Users" />
      <Nav to="category" icon={<MdCategory />} title="Categories" />
      <Nav to="orders" icon={<MdRequestQuote />} title="Orders" />
      <Nav to="items" icon={<MdComputer />} title="Items" />
    </nav>
  );
}
const Nav = ({ to = "", icon, title = "" }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={`/admin/${to}`}
      className={`w-full flex gap-3  items-center py-1.5 px-4 mb-2 dura  group text-lg text-black/80 font-bold hover:text-white cursor-pointer  hover:bg-tertiary rounded-md  ${
        pathname === `/admin/${to}` &&
        "group-hover:text-white text-tertiary"
      }`}
    >
      {React.cloneElement(icon, {
        className: `text-2xl `,
      })}{" "}
      {title}
    </Link>
  );
};

export default Sidebar;
