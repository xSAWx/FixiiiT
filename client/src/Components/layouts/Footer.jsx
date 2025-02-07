import React from "react";
import shape4 from "../../assets/shape-6.png";
import shape from "../../assets/shape-17.webp";
import logo from "../../assets/logo-white.png";
import { MdLocationOn, MdPhoneInTalk } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import Button from "../common/Button";

function Footer() {
  return (
    <footer className="w-full  text-white/80 font-bold tracking-wide bg-fif relative ">
      <img src={shape4} className="absolute  rotating w-24 top-32 left-24" />
      <div className="absolute w-24 right-24 top-0 !-translate-y-1/2">
        <img src={shape} className=" rotating " />
      </div>

      <section className="py-20 max-w-7xl mx-auto relative z-10   w-full px-6">
        <article className=" w-full grid gap-8 md:grid-cols-3 grid-cols-1">
          {/* LOGO  */}
          <aside>
            <img src={logo} className="w-32 " />
            <p className="mt-3">
              Our skilled technicians are dedicated to restoring your devices to
              their optimal functionality.
            </p>
          </aside>

          {/* LOCATION  */}
          <aside className="flex gap-3 self-center md:justify-self-center">
            <span className="h-12 flex-shrink-0 cursor-pointer w-12 group-hover:text-white group-hover:bg-tertiary rounded-full duration-300 text-3xl text-tertiary grid place-content-center bg-[#4A4269] hover:bg-tertiary hover:text-white">
              <MdLocationOn />
            </span>
            <div>
              <h1 className="mb-2 text-xl">Location: </h1>
              <p>Algeria, Oum El Bouaghi , Ain Beida</p>
            </div>
          </aside>

          {/* FOLLOW US ON  */}

          <aside className="md:justify-self-end justify-self-start self-center">
            <h1>Follow us on:</h1>
            <div className="grid grid-cols-4 gap-2">
              <a
                target="_blank"
                href="https://www.facebook.com/fix.iiit/"
                className="h-9 cursor-pointer w-9 hover:text-white hover:bg-tertiary rounded-full duration-300 text-xl text-tertiary grid place-content-center bg-[#4A4269]"
              >
                <FaFacebookF />
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/fix_iiit/"
                className="h-9 cursor-pointer w-9 hover:text-white hover:bg-tertiary rounded-full duration-300 text-xl text-tertiary grid place-content-center bg-[#4A4269]"
              >
                <FaInstagram />
              </a>
            </div>
          </aside>
        </article>

        {/* DIVDIR  */}
        <div className="w-full py-px bg-white/20 my-12" />

        <article className="w-full grid mt-20 gap-6 gap-y-12 md:grid-cols-3 grid-cols-1">
          {/* URGENT SUPPORT   */}
          <aside className="flex gap-3 group cursor-pointer md:self-start self-center md:justify-self-start justify-self-center">
            <span className="h-12 flex-shrink-0 cursor-pointer w-12 group-hover:text-white group-hover:bg-tertiary rounded-full duration-300 text-3xl text-tertiary grid place-content-center bg-[#4A4269] hover:bg-tertiary hover:text-white">
              <MdPhoneInTalk />
            </span>
            <div>
              <h1 className="text-[#ED562A] text-lg">URGENT SUPPORT?</h1>

              <h1 className="group-hover:text-[#ED562A] duration-200 text-lg">
                +0673142128
              </h1>
            </div>
          </aside>

          {/* OUR SERVICES  */}
          <aside className="md:justify-self-start  justify-self-center">
            <h1 className="text-[20px] text-white font-bold  mb-2">
              Quick Links
            </h1>
            <LINK to={"/faq"}>FAQ</LINK>
            <LINK to={"/privacy-policy"}>Privacy-Policy</LINK>
            <LINK to={"/terms-conditions"}>Terms & Conditions</LINK>
            <LINK to={"/refund-policy"}>Refund-Policy</LINK>
          </aside>

          {/* Subscribe to Our Newsletter  */}
          <aside className="justify-self-center w-full">
            <h1 className="text-[20px] text-white font-bold  mb-2">
              Subscribe to Our Newsletter
            </h1>

            <div className="relative mt-4">
              <div className="absolute right-0 ">
                <Button className="h-14 w-36 text-sm">SUBSCRIBE</Button>
              </div>
              <input
                placeholder="Your Email Adress"
                type="text"
                className="outline-none p-4 rounded-full placeholder:text-black/40 text-black focus:border-tertiary w-full"
              />
            </div>
          </aside>
        </article>
      </section>
    </footer>
  );
}

const LINK = ({ to = "/", children }) => {
  const { pathname } = useLocation();

  return (
    <div className="my-1">
      <Link
        to={to}
        className={`hover:text-tertiary duration-200 my-3 ml-1 ${
          pathname === to && "text-tertiary text-[18px]"
        }`}
      >
        {children}
      </Link>
    </div>
  );
};

export default Footer;
