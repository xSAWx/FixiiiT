import React from "react";
// import bg1 from "../../assets/shape-9.png";
import shape3 from "../../assets/shape-17.webp";
import shape2 from "../../assets/shape-13.png";
import bg2 from "../../assets/shape-12.png";
import shape from "../../assets/title-shape-2.png";
import Button from "../../Components/common/Button";
import { FaShippingFast } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../../Utils/motion";
import { GiAutoRepair } from "react-icons/gi";

function SixthSection() {
  return (
    <section className="max-w-8xl overflow-hidden relative mx-auto mb-20 lg:h-[680px] 2xl:rounded-2xl bg-gradient-to-r from-[#FC962B] via-[#F26C2A] to-[#EE572A]">
      {/* <img src={bg1} className="absolute  lg:w-[28vw] max-w-[400px]" />
      <img
        src={bg1}
        className="absolute  right-0 bottom-0 rotate-180  lg:w-[28vw] max-w-[400px]"
      /> */}
      <img
        src={shape3}
        className="lg:block  hidden absolute 2xl:hidden  top-1/2 -translate-y-1/2 !-translate-x-1/2 w-36"
      />
      <img
        src={shape2}
        className="lg:block  hidden absolute top-[15%] rotating -translate-y-1/2 left-[40%] w-36"
      />
      <motion.img
        src={bg2}
        className="lg:block  hidden absolute -bottom-20  -translate-y-1/2 right-[5%] w-[26vw] max-w-[500px] "
      />

      <article className="w-full h-full py-24 px-[10vw] grid lg:grid-cols-[2fr_3fr] gap-8">
        {/* HEADER  */}
        <motion.aside
          {...fadeIn("right", "", 0.3, 0.7)}
          className="grid items-center"
        >
          <nav>
            <div className="flex lg:justify-start justify-center  gap-2  items-center  font-bold tracking-wide text-white">
              <img src={shape} className="w-10 h-10 object-cover" />
              <p className="text-center ">EXCEPTIONAL SERVICE</p>{" "}
              <img src={shape} className="w-10 h-10 object-cover" />
            </div>

            <h1 className="lg:text-5xl text-4xl w-9/12 lg:mb-12 mb-4 lg:text-start text-center lg:mx-0 mx-auto font-bold tracking-wide text-white leading-snug">
              Why We Are Best From Others
            </h1>

            <div className="lg:block flex">
              <Button className="uppercase mx-auto !bg-gradient-to-r from-transparent to-transparent !p-6 border-2 border-white hover:border-purple-950 !py-4">
                Get A Proffitional Repair Now{" "}
              </Button>
            </div>
          </nav>
        </motion.aside>

        {/* BODY  */}

        <aside className="grid grid-rows-3 relative w-full grid-cols-1 lg:justify-between items-center gap-6">
          <Feature
            icon={<FaShippingFast />}
            text="After we make sure the device is working 100% we send it Back with Free shipping"
            title="Free and Fast Delivery"
            className="lg:translate-x-72"
          />
          <Feature
            delay={0.6}
            icon={<BsBoxSeam />}
            text="We use Ower experience and the latest diagnostic tools to carry out precise and efficient diagnoses"
            title="Professional Diagnostics
"
            className="lg:translate-x-36 "
          />
          <Feature
            delay={0.9}
            icon={<GiAutoRepair />}
            text="Diagnosis processing time after receipt of the unit : between 1 and 5 working days. You will also receive the shortest possible time for simple repairs"
            title="Professional Diagnostics
"
            className=""
          />
        </aside>
      </article>
    </section>
  );
}

const Feature = ({
  className = "",
  icon,
  title = "",
  text = "",
  delay = 0.3,
}) => (
  <motion.article className={`text-white   ${className}`}>
    <motion.div {...fadeIn("left", "", delay, 0.7)} className="flex gap-4">
      <div
        className={`rounded-lg flex-shrink-0 text-4xl text-tertiary  bg-white grid place-content-center w-[70px] h-[70px]`}
      >
        {icon}
      </div>

      <div>
        <h1 className="font-bold tracking-wide lg:text-2xl text-xl line-clamp-1 mb-1.5 w-72">
          {title}
        </h1>
        <p className="w-[55%] ">{text}</p>
      </div>
    </motion.div>
  </motion.article>
);

export default SixthSection;
