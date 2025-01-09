import React from "react";
import BreadCrumbs from "../../Components/common/BreadCrumbs";
import shape from "../../assets/shape-17.webp";

import { FirstSection } from "./FirstSection";
import { SecondSection } from "./SecondSection";
import { ThirdSection } from "./ThirdSection";
import { FourthSection } from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";

function Home() {
  return (
    <nav className="w-full pb-24">
      <BreadCrumbs
        navs={["Home", "Home Three"]}
        routes={["/", "/"]}
        title="Home Three"
      />
      <section className="max-w-8xl w-full mx-auto">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </section>
      <FourthSection />
      <FifthSection />
      <SixthSection />

      <div className="flex justify-center mx-auto gap-2 mb-4 items-center text-lg font-bold tracking-wide text-tertiary">
        <img src={shape} className="w-10 h-10 object-cover" />
        <p className="text-center text-lg">OUR BLOG</p>{" "}
        <img src={shape} className="w-10 h-10 object-cover" />
      </div>

      <h1 className="mx-auto  lg:w-4/12 !leading-tight text-center font-bold trac lg:text-5xl text-4xl text-[#0D0239]">
        The Digital Pulse: News & Updates{" "}
      </h1>
    </nav>
  );
}

export default Home;
