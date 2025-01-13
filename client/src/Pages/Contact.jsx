import React, { useEffect, useState } from "react";
import BreadCrumbs from "../Components/common/BreadCrumbs";
import { MdDoneAll, MdLocationOn, MdPhoneInTalk } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TitleS } from "./AboutUs";
import bg from "../assets/map-1536x478.webp"

import SnedMessage from "../Components/forms/SnedMessage";

function Contact() {
  return (
    <section className="">
      <BreadCrumbs
        navs={["Home", "Contact"]}
        routes={["/", "/contact "]}
        title="Contact"
      />

      <article className="my-20 max-w-6xl w-11/12 md:grid md:grid-cols-[1fr_2fr] grid-cols-1 gap-x-16 mx-auto ">
        {/* LEFT SECTION     */}
        <aside className="w-full self-start grid md:grid-cols-1 grid-cols-2 gap-x-4">
          {/* Address  */}
          <div>
            <h1 className="title !text-[28px] mb-6">Address</h1>
            <div className="flex gap-3 group mb-10">
              <span className="h-10 flex-shrink-0 cursor-pointer w-10 border border-tertiary group-hover:text-tertiary group-hover:bg-white rounded-full duration-300 text-2xl text-white grid place-content-center bg-tertiary hover:bg-white hover:text-tertiary">
                <MdLocationOn />
              </span>
              <div className=" text-black/60 font-semibold">
                Algeria, Oum El Bouaghi , Ain Beida ,<p>Firai</p>
              </div>
            </div>
          </div>

          {/* Working Hours  */}
          <div>
            <h1 className="title !text-[28px] mb-6">Working Hours</h1>
            <div className="flex gap-3 mb-10">
              <span className="h-10 flex-shrink-0 cursor-pointer w-10 border border-tertiary group-hover:text-white group-hover:bg-tertiary rounded-full duration-300 text-2xl text-white grid place-content-center bg-tertiary hover:bg-white hover:text-tertiary">
                <MdDoneAll />
              </span>
              <div className=" text-black/60 font-semibold">
                From 8 AM to 5 PM ,
                <p>7/7</p>
              </div>
            </div>
          </div>

          {/* Phone  */}
          <div>
            <h1 className="title !text-[28px] mb-6">Phone</h1>
            <div className="flex gap-3 mb-10">
              <span className="h-10 flex-shrink-0 cursor-pointer w-10 border border-tertiary group-hover:text-white group-hover:bg-tertiary rounded-full duration-300 text-2xl text-white grid place-content-center bg-tertiary hover:bg-white hover:text-tertiary">
                <MdPhoneInTalk />
              </span>
              <div className=" text-black/60 font-semibold">
                0673 14 21 28
                <p>0794 91 41 58</p>
              </div>
            </div>
          </div>

          {/* Share  */}
          <div>
            <h1 className="title !text-[28px] mb-6">Share</h1>
            <div className="flex gap-3 mb-10">
              <Link
                to="/"
                className="h-10 flex-shrink-0 cursor-pointer w-10 border border-tertiary group-hover:text-white group-hover:bg-tertiary rounded-full duration-300 text-2xl text-white grid place-content-center bg-tertiary hover:bg-white hover:text-tertiary"
              >
                <FaFacebook />
              </Link>
              <Link
                to="/"
                className="h-10 flex-shrink-0 cursor-pointer w-10 border border-tertiary group-hover:text-white group-hover:bg-tertiary rounded-full duration-300 text-2xl text-white grid place-content-center bg-tertiary hover:bg-white hover:text-tertiary"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </aside>

        {/* SEND MESSAGE  */}
        <aside className="md:w-11/12 w-full justify-self-end min-h-96 text-white bg-qua md:p-12 p-6 rounded-3xl">
          <TitleS size="!w-7 h-7" className="text-sm mb-3" title="CONTACT US" />
          <h1 className="md:text-5xl text-4xl mb-6 font-bold tracking-wide">
            Get in Touch{" "}
          </h1>

          <div className="grid gap-6">
            <SnedMessage />
          </div>
        </aside>
      </article>
      <img src={bg} className="w-full max-w-[2000px] mx-auto mb-20" />
    </section>
  );
}

export default Contact;
