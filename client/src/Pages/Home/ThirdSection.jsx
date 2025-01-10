import { MdCheck } from "react-icons/md";
import shape from "../../assets/shape-17.webp";
import bg3 from "../../assets/why-choose-2.webp";
import shape4 from "../../assets/shape-6.png";
import { useRef } from "react";
import useCounterUp from "../../Utils/useCounterUp";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../Utils/motion";

export const ThirdSection = () => (
  <motion.section {...fadeIn("up","",0.5,1)} className="max-w-[1900px] mx-auto grid md:grid-cols-[3fr_2fr] px-4 mt-16">
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
  </motion.section>
);

export const Info = ({ title = "", text = "" }) => (
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

export const Experience = ({ color, final, symbol, text, delay = 1 }) => {
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
