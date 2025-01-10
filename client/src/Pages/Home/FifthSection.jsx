import React, { useState } from "react";
import shape from "../../assets/shape-17.webp";
import bg1 from "../../assets/about-us-2-1.webp";
import bg2 from "../../assets/about-us-3-1.webp";
import bg3 from "../../assets/gallery-2.webp";
import bg4 from "../../assets/gallery-3.webp";
import bg5 from "../../assets/gallery-4.webp";
import bg6 from "../../assets/gallery-5.webp";
import bg7 from "../../assets/gallery-6.webp";
import { BsEye } from "react-icons/bs";
import Modal from "../../Components/common/Modal";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../Utils/motion";

function FifthSection() {
  return (
    <motion.section {...fadeIn()} className="grid mx-auto mt-32">
      <div  className="flex mx-auto gap-2 mb-4 items-center text-lg font-bold tracking-wide text-tertiary">
        <img src={shape} className="w-9 h-9 object-cover" />
        <p className="text-center text-sm">OUR GALLERY</p>{" "}
        <img src={shape} className="w-9 h-9 object-cover" />
      </div>
      <h1 className="mt-2 text-center Schedule mb-6 Expert Repairs mx-auto Instantly md:w-5/12 w-10/12   lg:text-[40px] text-[25px] leading-snug font-black text-[#0D0239] tracking-wide">
        Digital Delights: Journey Through Our Gallery{" "}
      </h1>

      <article className="max-w-[1600px] 2xl:w-[70%] w-11/12  mb-20 mx-auto">
        <aside className="grid  overflow-hidden  md:grid-cols-2 gap-6 ">
          <ImageCard img={bg1} delay={.3}/>

          <nav className="grid grid-cols-2 gap-6">
            <ImageCard img={bg3} delay={.5}/>
            <ImageCard img={bg4} delay={.7}/>
          </nav>
        </aside>
        <aside className="grid md:grid-cols-2  gap-6 mt-6">
          <nav className="grid grid-cols-2 gap-6">
            <ImageCard img={bg2} delay={.9}/>
            <ImageCard img={bg5} delay={1.1}/>
          </nav>

          <ImageCard img={bg6} />
        </aside>
      </article>
    </motion.section>
  );
}

const ImageCard = ({ img,delay }) => {
  const [open, setopen] = useState(false);
  return (
    <>
      <motion.aside {...fadeIn("","",delay,.7)} onClick={()=>{setopen(true)}} className="w-full 2xl:h-80 lg:h-72 h-56 bg-red-200 slide group relative z-10 before:z-20  cursor-pointer rounded-2xl overflow-hidden">
        <img
          src={img}
          className=" w-full h-full object-cover object-top button"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-md bg-tertiary opacity-0 group-hover:opacity-100 duration-300 text-xl z-30 text-white ">
          <BsEye />
        </div>
      </motion.aside>
      <Modal closabel={false} open={open} onClose={setopen} >
      <img src={img} className="max-h-[80dvh] rounded-xl" />
      </Modal>
    </>
  );
};

export default FifthSection;
