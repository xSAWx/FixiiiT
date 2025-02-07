import React from "react";
import BreadCrumbs from "../../Components/common/BreadCrumbs";
import shape from "../../assets/shape-17.webp";

import { FirstSection } from "./FirstSection";
import { SecondSection } from "./SecondSection";
import { ThirdSection } from "./ThirdSection";
import { FourthSection } from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import { motion } from "framer-motion";
import { fadeIn } from "../../Utils/motion";
import { BsChevronUp } from "react-icons/bs";
import { useScrollTop } from "../../Utils/utils";

function Home() {
  const { scrollToTop, showButton } = useScrollTop();
  return (
    <nav className="w-full pb-24 max-w-[100vw]">
      <BreadCrumbs navs={["Home"]} routes={["/"]} title="HOME" />
      <section className="max-w-8xl w-full mx-auto">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </section>
      <FifthSection />
      <SixthSection />

      <div className="flex justify-center mx-auto gap-2 mb-4 items-center text-lg font-bold tracking-wide text-tertiary">
        <img src={shape} className="w-10 h-10 object-cover" />
        <p className="text-center text-lg">OUR BLOG</p>{" "}
        <img src={shape} className="w-10 h-10 object-cover" />
      </div>

      <motion.h1
        {...fadeIn("up", "", 0.2, 0.7)}
        className="mx-auto  lg:w-4/12 !leading-tight text-center font-bold trac lg:text-5xl text-4xl text-[#0D0239]"
      >
        The Digital Pulse: News & Updates{" "}
      </motion.h1>

      <button
        onClick={scrollToTop}
        className={`fixed right-4 bottom-4 w-10 h-10 bg-tertiary text-white grid place-content-center duration-200 scale-0 rounded-md z-[60] text-2xl ${
          showButton && "scale-100"
        }`}
      >
        <BsChevronUp />{" "}
      </button>
    </nav>
  );
}

export default Home;
