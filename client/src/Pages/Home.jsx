import React, { useRef } from "react";
import BreadCrumbs from "../Components/common/BreadCrumbs";
import bg from "../assets/banner-4.webp";
import shape from "../assets/shape-17.webp";
import bg1 from "../assets/about-us-2-1.webp";
import bg2 from "../assets/about-us-3-1.webp";
import shape2 from "../assets/shape-19.webp";
import shape3 from "../assets/about.png";
import bg3 from "../assets/why-choose-2.webp";
import bg4 from "../assets/schedule-3.webp";
import shape4 from "../assets/shape-6.png";
import { GiAutoRepair } from "react-icons/gi";
import { MdCheck, MdNewReleases, MdPublishedWithChanges } from "react-icons/md";
import useCounterUp from "../Utils/useCounterUp";

function Home() {
  return (
    <nav className="w-full">
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
    </nav>
  );
}

const FirstSection = () => (
  <article className="grid relative md:grid-cols-2 gap-3 p-6 md:px-16">
    <aside className="h-full z-10 grid items-center">
      <div>
        <h2 className="xl:text-7xl tracking-wider xl:!leading-[78px] md:text-5xl text-2xl  md:text-start text-center mb-3 font-bold text-[#0D0239] self-center">
          Trusted <em className="text-[#FC8D21]">Computer</em> &amp;{" "}
          <em className="text-[#FC8D21]">Cellphone</em> Repair Experts!
        </h2>
        <p className="text-black/60 font-semibold tracking-wide lg:text-base text-sm my-4 line-clamp-2">
          Our skilled technicians are dedicated to restoring your devices to
          their optimal functionality, ensuring you stay connected in todays
          fast-paced digital world.
        </p>
      </div>
    </aside>
    <img src={bg} alt="" />
    <img src={shape} className="absolute bottom-1/3 left-3" alt="" />
  </article>
);

const SecondSection = () => (
  <article className="grid justify-center max-w-[1400px] gap-12 w-full  lg:px-12 px-6 mx-auto md:grid-cols-2 mt-10">
    <aside className="relative self-center lg:h-[650px]  lg:max-h-dvh overflow-hidden">
      <img
        src={shape2}
        className="lg:absolute lg:block hidden  lg:w-3/4  right-0 top-0   "
      />
      <img
        src={bg1}
        className="lg:absolute  lg:w-3/4 lg:mb-0 mb-6 rounded-2xl "
      />
      <img
        src={bg2}
        className="lg:absolute lg:w-2/4 right-0 bottom-0 rounded-2xl "
      />
      <div className="lg:absolute items-center text-3xl text-white font-bold tracking-wide  px-3 py-2 lg:w-5/12 w-full mt-4 left-0 bottom-0 lg:rounded-full rounded-2xl bg-tertiary flex gap-3.5">
        <img src={shape3} className="w-2/12 max-w-8" />
        <div>
          <h1>6+</h1>
          <h2 className="text-sm">Years of Experience</h2>
        </div>
      </div>
    </aside>

    <aside className="">
      <div className="flex gap-2 mb-4 items-center text-lg font-bold tracking-wide text-tertiary">
        <img src={shape} className="w-12 h-12 object-cover" />
        <p className="text-center">ABOUT US</p>{" "}
        <img src={shape} className="w-12 h-12 object-cover" />
      </div>

      <h1 className="text-qua lg:text-[40px] mb-4 text-[27px] font-extrabold leading-snug">
        Empowering Your Devices: Crafting Solutions
      </h1>

      <h2 className="text-black/60 text-[17px] font-semibold tracking-wide">
        Welcome to Fixo, where technology meets expertise. With a passion for
        problem-solving and a dedication to exceptional service
      </h2>

      <div className="grid gap-2 grid-cols-2 gap-y-6 mt-6">
        <Skill
          color="text-[#ED562A] bg-[#ED562A]"
          text="Expert Technicians"
          icon={<GiAutoRepair />}
        />
        <Skill
          color="text-[#0A3E92] bg-[#0A3E92]"
          text="Quality Repairs"
          icon={<MdPublishedWithChanges />}
        />
        <Skill
          color="text-[#0A3E92] bg-[#0A3E92]"
          text="Expert Technicians"
          icon={<MdPublishedWithChanges />}
        />
        <Skill
          color="text-[#FC8D21] bg-[#FC8D21]"
          text="Expert Technicians"
          icon={<GiAutoRepair />}
        />
      </div>

      <p className="my-4 font-semibold tracking-wide text-black/50">
        Our mission is to provide reliable, efficient, and affordable repair
        services, ensuring that your devices are restored to optimal
        functionality. We understand the vital role technology plays in your
        daily life, and we are committed to keeping you connected.
      </p>
    </aside>
  </article>
);

const ThirdSection = () => (
  <section className="max-w-[1900px] mx-auto grid md:grid-cols-[3fr_2fr] px-4 mt-16">
    <aside className="relative px-4">
      {/* ROTATING  */}
      <img
        src={shape4}
        className="absolute -z-10 right-4 rotating  top-4"
        alt=""
      />

      {/* WHY CHOOSE US  */}
      <div className="flex  gap-2 mb-4 items-center text-lg font-bold tracking-wide text-tertiary">
        <img src={shape} className="w-12 h-12 object-cover" />
        <p className="text-center">WHY CHOOSE US</p>{" "}
        <img src={shape} className="w-12 h-12 object-cover" />
      </div>

      {/* HEADER  */}
      <h1 className="text-[#0D0239] lg:text-[44px] 2xl:w-8/12 mb-4 text-[27px] font-extrabold leading-snug">
        Experience Seamless Repairs: Your Devices Deserve the Best
      </h1>
      <h2 className="text-black/60 text-[17px] 2xl:w-9/12 font-semibold tracking-wide">
        Our mission is to provide reliable, efficient, and affordable repair
        services, ensuring that your devices are restored to optimal
        functionality. We understand the vital role technology plays in your
        daily life, and we are committed to keeping you connected.
      </h2>

      {/* INFOS  */}
      <div className="grid md:grid-cols-2 mt-6 gap-4 gap-y-6 pr-4">
        <Info
          title="Exceptional Expertise"
          text="Our team consists of experienced technicians who specialize closely in the repair of graphics cards and computer hardware. With over 3,000 satisfied customers a year, we have extensive experience with different brands and models and can diagnose and fix a wide range of problems. Whether it's graphics cards, motherboards or other components, we know what matters."
        />
        <Info
          title="Customer-Centric Approach"
          text="Our quality is unmatched. We treat every item with care as if it is our own. When you submit your device for repair, you can rest assured that it’s in good hands."
        />
        <Info
          title="Quality Guaranteed"
          text="The quality of our repairs is our top priority. We only use 100% original parts and high-quality replacement components to ensure that your device works again in top condition. We provide one month warranty on all repairs and replaced components. This gives you the assurance that your repair has been carried out with the utmost care and quality."
        />
        <Info
          title="Customer Service"
          text="Your satisfaction is important to us. We are always available to answer your questions and keep you informed throughout the entire repair process. From the acceptance of your repair order to the delivery of your device - we are there for you."
        />
      </div>

      {/* EXPERINECES  */}
      <div className="flex md:flex-row flex-col  gap-4 my-6">
        <Experience
          color="bg-tertiary"
          final={6}
          delay={10}
          symbol="+"
          text="Years of Experience"
        />
        <Experience
          color="bg-[#FC8B2F]"
          final={55}
          delay={5}
          symbol="+"
          text="Devices Repaired"
        />
        <Experience
          color="bg-[#3E9D81]"
          final={100}
          delay={2}
          symbol="%"
          text="Satisfied customers"
        />
      </div>
    </aside>

    {/* BIG IMAGE  */}
    <div className="mx-auto">
      <img
        src={bg3}
        className="md:h-[160dvh] max-h-[900px] h-96 max-w-full md:mt-0 mt-4  rounded-2xl object-cover"
        alt=""
      />
    </div>
  </section>
);

const FourthSection = () => (
  <section className=" relative mt-10 h-screen">
    <img
      src={bg4}
      className="w-screen max-h-[750px] -z-10 object-top object-cover  absolute"
    />

    <article className="md:absolute p-8 px-12 mx-auto translate-y-16 right-[15%] h-screen rounded-3xl bg-secondary  max-w-full w-9/12 md:w-[36%]">
      <div className="flex  gap-2 mb-4 items-center text-base font-bold tracking-wide text-tertiary">
        <img src={shape} className="w-9 h-9 object-cover" />
        <p className="text-center">TEXTE AN EXPERT </p>{" "}
        <img src={shape} className="w-9 h-9 object-cover" />
      </div>
      <h1 className="mt-2 Schedule Expert Repairs Instantly w-11/12   text-4xl font-black text-white tracking-wide">Schedule Expert Repairs Instantly </h1>
    </article>
  </section>
);

const Skill = ({ color = "", text = "", icon }) => {
  const c = `text-[${color}] bg-[${color}]`;
  return (
    <article className="flex gap-3 group items-center cursor-pointer">
      <div
        className={`md:p-2.5 p-1.5 grid place-content-center rounded-lg duration-200 group-hover:text-white bg-opacity-20 md:text-[34px] text-[25px] group-hover:bg-opacity-100 
      ${color}`}
      >
        {icon}
      </div>

      <h1 className="lg:text-[20px] text-sm font-bold tracking-wide">{text}</h1>
    </article>
  );
};

const Info = ({ title = "", text = "" }) => (
  <article className="flex gap-3">
    <span className="grid place-content-center bg-tertiary text-tertiary rounded-full p-2 h-12 w-12 bg-opacity-20 text-4xl">
      <MdCheck />
    </span>
    <div>
      <h1 className="text-qua font-extrabold mt-2 text-xl">{title}</h1>
      <h2 className="text-black/50 text-[15px] mt-2 font-semibold tracking-wide line-clamp-[8]">
        {text}
      </h2>
    </div>
  </article>
);

const Experience = ({ color, final, symbol, text, delay = 1 }) => {
  const counterRef = useRef();
  const counter = useCounterUp({ counterRef, targetCount: final, delay });

  return (
    <article
      ref={counterRef}
      className={`rounded-full font-bold tracking-wide w-full text-center  xl:text-3xl text-xl  text-white p-4 ${color}`}
    >
      <h1>
        {counter}
        <span>{symbol}</span>
      </h1>
      <h2 className="xl:text-2xl lg:text-lg">{text}</h2>
    </article>
  );
};

export default Home;
