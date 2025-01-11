import shape from "../../assets/shape-17.webp";
import bg1 from "../../assets/about-us-2-1.webp";
import bg2 from "../../assets/about-us-3-1.webp";
import shape2 from "../../assets/shape-19.webp";

import shape3 from "../../assets/about.png";
import { GiAutoRepair } from "react-icons/gi";
import { MdPublishedWithChanges } from "react-icons/md";
import Button from "../../Components/common/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../Utils/motion";
import { BiTimer } from "react-icons/bi";
import { FaRegGrinStars } from "react-icons/fa";

export const SecondSection = () => (
  <article className="grid justify-center max-w-[1400px] gap-12 w-full  lg:px-12 px-6 mx-auto md:grid-cols-2 mt-10">
    <motion.aside
      {...fadeIn("right", "", 0.5, 0.7)}
      className="relative self-center lg:h-[650px]  lg:max-h-dvh overflow-hidden"
    >
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
    </motion.aside>

    <About />
  </article>
);

export const About = () => (
  <motion.aside {...fadeIn("left", "", 0.5, 0.7)} className="">
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
        text="Quick Turnaround"
        icon={<BiTimer />}
      />
      <Skill
        color="text-[#FC8D21] bg-[#FC8D21]"
        text="Happy Client"
        icon={<FaRegGrinStars />}
      />
    </div>

    <p className="my-4 font-semibold tracking-wide text-black/50">
      Our mission is to provide reliable, efficient, and affordable repair
      services, ensuring that your devices are restored to optimal
      functionality. We understand the vital role technology plays in your daily
      life, and we are committed to keeping you connected.
    </p>
    <Button className="w-52 mt-4">MORE ABOUT US</Button>
  </motion.aside>
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
