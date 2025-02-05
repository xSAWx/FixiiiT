import React, { useEffect } from "react";
import { MdLocationOn, MdPhoneInTalk, MdTimer } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import useInHome from "../../Utils/useInHome";
import { useSetTitle } from "../../Utils/utils";
import { useLocation } from "react-router-dom";

function Header() {
  useInHome();
  useSetTitle();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.split("/").length < 3) window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]);

  return (
    <header className="w-full bg-gradient-to-r font-medium text-white  min-h-24 dark:min-h-32  from-[#FC962B] to-[#EE572A]">
      <nav className="max-w-[1820px] h-24 mx-auto px-4 pt-3 pb-6 flex md:flex-row flex-col   justify-between items-center">
        {/* LEFT AREA  */}
        <aside className="flex gap-10">
          <div className="lg:flex hidden group cursor-pointer items-center gap-2">
            <span className="h-9 flex-shrink-0 cursor-pointer w-9 group-hover:text-white group-hover:bg-tertiary rounded-full duration-300 text-xl text-tertiary grid place-content-center bg-white">
              <MdLocationOn />
            </span>
            <h1 className="2xl:text-base md:text-sm line-clamp-1 text-xs tracking-wider ">
              Algeria, Oum El Bouaghi , Ain Beida
            </h1>
          </div>

          <div className="dark:hidden flex group cursor-pointer items-center gap-2">
            <span className="h-9 cursor-pointer w-9 md:scale-100 scale-75 group-hover:text-white group-hover:bg-tertiary rounded-full duration-300 text-xl text-tertiary grid place-content-center bg-white">
              <MdTimer />
            </span>
            <h1 className="2xl:text-base line-clamp-1 md:text-sm text-xs tracking-wider ">
              Mon-Fri: 10:00am-5:00pm, Sat-Sun: 10:00am-5:00pm
            </h1>
          </div>
        </aside>

        <UrgentNeedSupport />

        {/* RIGHT AREA  */}
        <aside className="flex gap-2 md:scale-100 scale-75 md:mt-0 mt-1 items-center">
          <h1 className="2xl:text-lg line-clamp-1 font-bold text-base tracking-wider">
            Follow us on :
          </h1>
          <a
            target="_blank"
            href="https://www.facebook.com"
            className="h-9 cursor-pointer w-9 hover:text-white hover:bg-tertiary rounded-full duration-300 text-xl text-tertiary grid place-content-center bg-white"
          >
            <FaFacebookF />
          </a>
          <span className="h-9 cursor-pointer w-9 hover:text-white hover:bg-tertiary rounded-full duration-300 text-xl text-tertiary grid place-content-center bg-white">
            <FaXTwitter className="translate-x-px" />
          </span>

          <a
            target="_blank"
            href="https://www.instagram.com/fix_iiit/"
            className="h-9 cursor-pointer w-9 hover:text-white hover:bg-tertiary rounded-full duration-300 text-xl text-tertiary grid place-content-center bg-white"
          >
            <FaInstagram />
          </a>
          <span className="h-9 cursor-pointer w-9 hover:text-white hover:bg-tertiary rounded-full duration-300 text-xl text-tertiary grid place-content-center bg-white">
            <FaLinkedin />
          </span>
        </aside>
      </nav>
    </header>
  );
}

export const UrgentNeedSupport = () => (
  <article className="p-2  px-5 pr-7 mx-2 font-semibold lg:scale-100 2xl:text-base 2xl:translate-y-1 lg:text-sm text-xs tracking-wide group rounded-full cursor-pointer dark:flex hidden items-center gap-3.5 bg-white/20">
    <span className="h-9 cursor-pointer w-9   group-hover:text-tertiary group-hover:bg-white rounded-full duration-300 text-xl text-white grid place-content-center bg-tertiary">
      <MdPhoneInTalk className="translate-x-px" />
    </span>
    <aside>
      <h1 className="mb-2">Urgent Need Support?</h1>
      <h1 className="text-nowrap">0673142128 &nbsp; &nbsp; 0794914158</h1>
    </aside>
  </article>
);

export default Header;
