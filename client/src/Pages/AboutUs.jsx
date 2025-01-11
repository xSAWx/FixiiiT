import React, { useRef, useState } from "react";
import BreadCrumbs from "../Components/common/BreadCrumbs";
import { About } from "./Home/SecondSection";
import bg1 from "../assets/about-us-1.webp";
import bg2 from "../assets/about-us-2.webp";
import bg3 from "../assets/about-us-3.webp";
import bg4 from "../assets/about-us-4.webp";
import bg5 from "../assets/shape-9.png";
import bg6 from "../assets/why-choose.webp";
import bg7 from "../assets/testimonials-bg.webp";
import bg8 from "../assets/schedule.webp";
import shape3 from "../assets/shape-17.webp";
import shape2 from "../assets/shape-13.png";
import shape from "../assets/shape-17.webp";
import shape4 from "../assets/shape-6.png";

import { motion } from "framer-motion";
import { fadeIn } from "../Utils/motion";
import { MdArrowRight, MdEast, MdPhoneInTalk, MdStar } from "react-icons/md";
import Button from "../Components/common/Button";
import { Info } from "./Home/ThirdSection";
import useCounterUp from "../Utils/useCounterUp";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { useScreenWidth } from "../Utils/utils";
import SendText from "../Components/forms/SendText";

function AboutUs() {
  const [swip, setSwip] = useState();

  return (
    <section>
      <BreadCrumbs
        navs={["Home", "About Us"]}
        routes={["/", "/about-us "]}
        title="ABOUT US"
      />
      {/* ABOUT US  */}

      <article className="max-w-7xl overflow-x-hidden px-8 mx-auto my-20 grid md:grid-cols-2 gap-12">
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

      {/* BLUE SQUAR  */}

      <article className="max-w-7xl overflow-hidden relative text-white font-bold mx-auto grid place-content-center gap-6 w-11/12 rounded-xl bg-fif md:h-96 md:py-0 py-12 mb-20">
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
        <motion.h1
          {...fadeIn("down", "", 0.3, 0.7)}
          className="text-white font-bold tracking-wide lg:text-5xl text-2xl lg:w-8/12 w-10/12 text-center mx-auto"
        >
          We Repair, You Relax. Click Below and Lets Fix Your Devices!
        </motion.h1>

        <motion.div
          {...fadeIn("up", "", 0.3, 0.7)}
          className="grid md:grid-cols-3 gap-8 md:w-9/12 md:scale-100 scale-75 items-center mx-auto md:mt-6"
        >
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
        </motion.div>
      </article>

      {/* WHY CHOOSE US  */}
      <article className="max-w-7xl overflow-x-hidden relative px-8 mx-auto">
        <img src={shape4} className="right-48 top-10 rotating -z-10 absolute" />

        <div className="flex gap-2 mb-4 items-center text-lg font-bold tracking-wide text-tertiary">
          <img src={shape} className="w-12 h-12 object-cover" />
          <p className="text-center">WHY CHOOSE US</p>{" "}
          <img src={shape} className="w-12 h-12 object-cover" />
        </div>

        <motion.h1
          {...fadeIn("right", "", 0.3, 0.7)}
          className="text-fif md:text-5xl text-3xl font-bold md:w-8/12 mb-16"
        >
          Experience Seamless Repairs: Your Devices Deserve the Best
        </motion.h1>

        <aside className="grid md:grid-cols-3 gap-y-4">
          <motion.div {...fadeIn("right", "", 0, 0.7)} className="grid gap-4">
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
          <motion.img
            {...fadeIn("", "", 0.4, 1.2)}
            src={bg6}
            className="md:max-h-screen max-h-[400px] mx-auto"
          />
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
            <Exp delay={1} final={100} symbol="%" text="Satisfied customers" />
          </div>
        </aside>
      </article>

      <article className="my-28 w-full overflow-x-hidden h-[680px]  overflow-hidden relative ">
        <motion.aside {...fadeIn("","",.5,1)} className="grid md:grid-cols-[1fr_2fr] gap-6 h-full relative mx-auto z-10 max-w-7xl w-11/12">
          {/* TESTIMONIALS  */}

          <div className="self-center w-full">
            <div className="flex gap-2 mb-4 md:justify-start justify-center items-center text-lg font-bold tracking-wide text-tertiary">
              <img src={shape} className="w-9 h-9 object-cover" />
              <p className="text-center">TESTIMONIALS</p>{" "}
              <img src={shape} className="w-9 h-9 object-cover" />
            </div>
            <h1 className="text-white md:text-start text-center md:text-[50px] text-[35px] leading-tight font-bold">
              Success Stories: From Our Client’s Perspective
            </h1>
            <div className="flex gap-4 md:justify-start justify-center mt-4 text-white ">
              {" "}
              <button
                className="w-10 h-10 rotate-180 text-2xl text-black/70 bg-white/90 duration-200 hover:text-white hover:bg-tertiary rounded-full grid place-content-center"
                onClick={() => {
                  swip?.slidePrev();
                }}
              >
                <MdEast />
              </button>
              <button
                className="w-10 h-10 text-2xl text-black/70 bg-white/90 duration-200 hover:text-white hover:bg-tertiary rounded-full grid place-content-center"
                onClick={() => {
                  swip?.slideNext();
                }}
              >
                <MdEast />
              </button>
            </div>
          </div>
          {/* SLIDES  */}

          <div className="self-center text-white flex gap-4 h-96 w-full  overflow-hidden">
            <ReviewSlides setSwip={setSwip} />
          </div>
        </motion.aside>
        <img src={bg7} className="h-full w-full object-cover absolute top-0" />
        <img
          src={shape4}
          className="absolute bottom-16  left-1/4 w-28 rotating"
        />
      </article>

      {/* SEND FORM */}
      <article className="my-20 w-11/12 mx-auto px-12 gap-8 max-w-8xl grid md:grid-cols-2 overflow-hidden">
        <motion.img {...fadeIn("right","",.3,.7)} src={bg8} className="self-center" />

        <motion.aside {...fadeIn("left","",0.3,.7)} className="text-black">
          <TitleS
            title="BOOK A SCHEDULE"
            size="!w-8 !h-8"
            className="text-[15px]"
          />
          <h1 className="text-[52px] leading-tight text-fif font-bold w-10/12 tracking-wide">
            Schedule Expert Repairs Instantly
          </h1>

          <SendText />
        </motion.aside>
      </article>
    </section>
  );
}

const ReviewSlides = ({ setSwip }) => {
  const screen = useScreenWidth();
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      loop={true}
      slidesPerView={screen > 1000 ? 2 : 1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      onSwiper={(swiper) => setSwip(swiper)}
    >
      <SwiperSlide>
        <ReviewCard
          name="limneticzone"
          text="He went through every last detail to find the problem. Exceptional work."
          country="Australia"
          image="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3bbbe39a9580bc2af8fddf03751d27a7-1313265591659557033.042093/06748A8E-E24D-4983-8544-B932D3C8C264"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard
          name="vifalu"
          text="Perfect service, super happy! I can recommend it to everyone."
          country="Germany"
          image="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e4d6658a02a2d67ca7f1b10d1e3864be-1729804599722/79612bb0-e434-4090-94cc-4f0c18b36335.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard
          name="im_ariihow"
          text="Amazing at his jobs and literally did more than what I expected!!!!"
          country="United States"
          image="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/0a806896c96122f22455436b0379731e-1746992881714419582.736017/CEAC6D13-D88B-4603-A190-83F48EF4BB19"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard
          name="lilaterrible"
          text="Very kind and professional, he contacted me instantly and started super quick, after few hours everything was done"
          country="Germany"
          image="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/02c07b394aa057f0c1969a55f1d86299-1723922701107/4f286d01-dc3f-4732-b0ff-ea34f36afa35.jpeg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

const Exp = ({ final, symbol = "+", text, className, delay }) => {
  const ref = useRef();
  const cc = useCounterUp({
    counterRef: ref,
    targetCount: final,
    delay: delay * 2,
  });

  return (
    <motion.aside
      {...fadeIn("left", "", delay / 10, 0.7)}
      className={` ${className}`}
    >
      <h1 ref={ref} className="gap-2 text-4xl font-bold text-tertiary ">
        {cc}
        <span>{symbol}</span>
      </h1>
      <p className="text-fif text-xl font-bold tracking-wide">{text}</p>
    </motion.aside>
  );
};

const ReviewCard = ({ text, name, country, image }) => {
  return (
    <article className="h-full w-full border-2 flex flex-col justify-between rounded-2xl border-white/25 p-10">
      <aside className="flex justify-between items-center text-orange-800 ">
        <TfiCommentsSmiley className="text-5xl" />
        <div className="flex gap-0.5">
          {[...Array(5)].map(() => (
            <MdStar className="text-[25px] text-[#FDC030]" />
          ))}
        </div>
      </aside>

      <aside className="line-clamp-5 my-8 text-white/70 text-xl tracking-wide font-semibold">
        {text}
      </aside>

      <aside className="flex gap-2 text-white items-center">
        <img src={image} className="rounded-full flex-shrink-0 w-12 h-12" />
        <div>
          <h1 className=" font-bold text-xl mb-1">{name}</h1>
          <p className="text-white/60 text-sm">{country}</p>
        </div>
      </aside>
    </article>
  );
};

export const TitleS = ({ title, className, size }) => (
  <div
    className={`flex gap-2 mb-4 md:justify-start justify-center items-center text-lg font-bold tracking-wide text-tertiary ${className}`}
  >
    <img src={shape} className={`w-9 h-9 object-cover ${size}`} />
    <p className="text-center">{title}</p>{" "}
    <img src={shape} className={`w-9 h-9 object-cover ${size}`} />
  </div>
);

export default AboutUs;
