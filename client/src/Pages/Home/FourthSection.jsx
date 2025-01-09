import shape from "../../assets/shape-17.webp";
import bg4 from "../../assets/schedule-3.webp";

import SendText from "../../Components/forms/SendText";
import { MdPhoneInTalk } from "react-icons/md";

export const FourthSection = () => (
  <section className=" relative mt-10 ">
    <img
      src={bg4}
      className="w-screen max-h-[750px] -z-10 object-top object-cover  absolute"
    />

    <article className="p-8 md:px-12 mx-auto translate-y-16 lg:translate-x-1/3 right-[15%]  rounded-3xl bg-secondary  max-w-full w-11/12  2xl:w-[36%] lg:w-[45%]">
      <div className="flex  gap-2 mb-4 items-center text-base font-bold tracking-wide text-tertiary">
        <img src={shape} className="w-9 h-9 object-cover" />
        <p className="text-center">TEXTE AN EXPERT </p>{" "}
        <img src={shape} className="w-9 h-9 object-cover" />
      </div>
      <h1 className="mt-2 Schedule mb-6 Expert Repairs Instantly w-11/12   text-4xl font-black text-white tracking-wide">
        Schedule Expert Repairs Instantly{" "}
      </h1>
      <SendText />
    </article>


    {/* NEED SUPPORT  */}
    <aside className="absolute -z-10 top-[900px] xl:flex hidden gap-4 left-[20%]">
      <article className="p-3  px-5 pr-7 mx-2  font-semibold flex lg:scale-100 2xl:text-base 2xl:translate-y-1 lg:text-sm text-xs tracking-wide group rounded-full cursor-pointer  items-center gap-3.5 bg-tertiary bg-opacity-20">
        <span className="h-9 cursor-pointer w-9   group-hover:text-tertiary group-hover:bg-white rounded-full duration-300 text-xl text-white grid place-content-center bg-tertiary">
          <MdPhoneInTalk className="translate-x-px" />
        </span>
        <aside>
          <h1 className="mb-2 text-tertiary">Urgent Need Support?</h1>
          <h1 className="text-nowrap text-gray-800">0673142128</h1>
        </aside>
      </article>
    </aside>
  </section>
);
