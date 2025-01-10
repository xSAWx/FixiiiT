import React, { useRef } from "react";
import BreadCrumbs from "../Components/common/BreadCrumbs";
import { About } from "./Home/SecondSection";
import bg1 from "../assets/about-us-1.webp";
import bg2 from "../assets/about-us-2.webp";
import bg3 from "../assets/about-us-3.webp";
import bg4 from "../assets/about-us-4.webp";
import bg5 from "../assets/shape-9.png";
import bg6 from "../assets/why-choose.webp";
import shape3 from "../assets/shape-17.webp";
import shape2 from "../assets/shape-13.png";
import shape from "../assets/shape-17.webp";
import shape4 from "../assets/shape-6.png";

import { motion } from "framer-motion";
import { fadeIn } from "../Utils/motion";
import { MdPhoneInTalk } from "react-icons/md";
import Button from "../Components/common/Button";
import { Info } from "./Home/ThirdSection";
import useCounterUp from "../Utils/useCounterUp";

function AboutUs() {
  return (
    <section>
      <BreadCrumbs
        navs={["Home", "About Us"]}
        routes={["/", "/about-us "]}
        title="ABOUT US"
      />
      <article className="max-w-7xl px-8 mx-auto my-20 grid md:grid-cols-2 gap-12">
        <motion.aside
          {...fadeIn("right", "", 0.5, 0.7)}
          className="grid grid-cols-2 place-content-center"
        >
          <img src={bg1} className="rounded-tr-[150px]" />
          <img src={bg2} className="rounded-b-[150px]" />
          <img src={bg3} className="rounded-t-[150px]" />
          <img src={bg4} className="rounded-bl-[150px]" />
        </motion.aside>
        <About />
      </article>

      <article className="max-w-7xl relative text-white font-bold mx-auto grid place-content-center gap-6 w-11/12 rounded-xl bg-fif md:h-96 md:py-0 py-12 mb-20">
        <img
          src={shape2}
          className="rotating absolute right-8 top-8 md:opacity-100 opacity-40"
        />
        <img
          src={shape3}
          className="rotating absolute left-8 bottom-8 w-20 md:opacity-100 opacity-40"
        />
        <img
          src={bg5}
          className="absolute md:opacity-100 opacity-25  lg:w-[28vw] max-w-[340px]"
        />
        <img
          src={bg5}
          className="absolute  right-0 bottom-0 rotate-180 md:opacity-100 opacity-25  lg:w-[28vw] max-w-[340px]"
        />
        <h1 className="text-white font-bold tracking-wide lg:text-5xl text-2xl lg:w-8/12 w-10/12 text-center mx-auto">
          We Repair, You Relax. Click Below and Lets Fix Your Devices!
        </h1>

        <div className="grid md:grid-cols-3 gap-8 md:w-9/12 md:scale-100 scale-75 items-center mx-auto md:mt-6">
          <div className="flex gap-2 items-center">
            <span className="h-14 cursor-pointer w-14 flex-shrink-0 hover:text-tertiary hover:bg-white rounded-full duration-300 text-3xl text-white grid place-content-center bg-tertiary">
              <MdPhoneInTalk className="translate-x-px " />
            </span>
            <h1 className="text-tertiary text-3xl tracking-widest font-bold">
              +213673142128
            </h1>
          </div>

          <h2 className="text-2xl  justify-self-center">OR</h2>

          <Button to="/schedule" className="px-8 text-base">
            GET A SCHEDULE
          </Button>
        </div>
      </article>

      <article className="max-w-7xl relative px-8 mx-auto">
        <img src={shape4} className="right-48 top-10 rotating absolute" />

        <div className="flex gap-2 mb-4 items-center text-lg font-bold tracking-wide text-tertiary">
          <img src={shape} className="w-12 h-12 object-cover" />
          <p className="text-center">WHY CHOOSE US</p>{" "}
          <img src={shape} className="w-12 h-12 object-cover" />
        </div>

        <h1 className="text-fif text-5xl font-bold md:w-8/12 mb-16">
          Experience Seamless Repairs: Your Devices Deserve the Best
        </h1>

        <aside  className="grid md:grid-cols-3 gap-y-4">
          <motion.div {...fadeIn("right","",0,.7)} className="grid gap-4">
            <Info
              title="Exceptional Expertise"
              text="Our skilled technicians bring years of experience and specialized knowledge to ensure precise, reliable repairs for your devices."
            />
            <Info
              title="Customer-Centric Approach"
              text="Our skilled technicians bring years of experience and specialized knowledge to ensure precise, reliable repairs for your devices."
            />
            <Info
              title="Quality Guaranteed"
              text="Our skilled technicians bring years of experience and specialized knowledge to ensure precise, reliable repairs for your devices."
            />
            <Info
              title="Customer Service"
              text="Our skilled technicians bring years of experience and specialized knowledge to ensure precise, reliable repairs for your devices."
            />
          </motion.div>
          <motion.img {...fadeIn("","",0,.7)} src={bg6} className="md:max-h-screen max-h-[400px] mx-auto" />
          <div className="grid gap-12 py-10 self-center">
            <Exp
              delay={8}
              final={6}
              text="Years Of Experience"
              className="justify-self-end"
            />
            <Exp
              delay={3}
              final={55}
              text="Devices Repaired"
              className="justify-self-center"
            />
            <Exp
              delay={1}
              final={100}
              symbol="%"
              text="Satisfied customers"
            />
          </div>
        </aside>
      </article>
    </section>
  );
}

const Exp = ({ final, symbol = "+", text, className, delay }) => {
  const ref = useRef();
  const cc = useCounterUp({ counterRef: ref, targetCount: final, delay });
  
  return (
    <motion.aside {...fadeIn("left","",delay/10,.7)} className={` ${className}`}>
      <h1 ref={ref} className="gap-2 text-4xl font-bold text-tertiary ">
        {cc}
        <span>{symbol}</span>
      </h1>
      <p className="text-fif text-xl font-bold tracking-wide">{text}</p>
    </motion.aside>
  );
};

export default AboutUs;
