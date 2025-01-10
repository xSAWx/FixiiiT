import bg from "../../assets/banner-4.webp";
import shape from "../../assets/shape-17.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../../Utils/motion";
export const FirstSection = () => (
  <article className="grid relative md:grid-cols-2 gap-3 p-6 md:px-24">
    <motion.aside {...fadeIn("right","",0,.7)} className="h-full z-10 grid items-center">
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
    </motion.aside>
    <motion.img {...fadeIn("left","",0,.7)} src={bg} alt="" />
    <img src={shape} className="absolute rotating bottom-1/3 left-3" alt="" />
  </article>
);
