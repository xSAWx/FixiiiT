import React from "react";
import BreadCrumbs from "../../Components/common/BreadCrumbs";
import { Link } from "react-router-dom";

function OurTeam() {
  return (
    <section>
      <BreadCrumbs
        navs={["Home", "Our-Team"]}
        routes={["/", "/our-team"]}
        title="Our Team"
      />
      <article className="my-20 gap-10 flex-wrap flex justify-center">
        <Member
          image="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/dc2e96b14c9908bbb2474be513ebad07-870367161735933072089/JPEG_20250103_203747_4842702761035070249.jpg"
          text="Pc Expert Software And Hardware"
          name="Mehdi Bz"
          link="https://www.fiverr.com/s/LdNgX4A"
        />
        <Member
          image="https://i.ibb.co/zxsV3yb/Algerian-man.jpg"
          text="Web Developer Full-Stack "
          name="Sohaib Mansouri"
          link="https://www.fiverr.com/s/LdNgX4A"
        />
      </article>
    </section>
  );
}

const Member = ({ image, text, link, name }) => (
  <aside className=" grid justify-center cursor-pointer group duration-200 hover:-translate-y-1">
    <div className="w-80 h-80 relative ">
      <img
        src={image}
        className=" rounded-full w-full group-hover:bg-opacity-15 h-80 object-cover object-top duration-200"
      />

      <a
        href={link} target="_blank"
        className="absolute hover:bg-white/60  hover:scale-105 left-1/2 text-tertiary w-9 h-9 scale-0 group-hover:scale-100 duration-200 bg-white grid place-content-center  rounded-full -translate-x-1/2 -translate-y-12 "
      >
        <svg
          fill="#ed562a"
          viewBox="-2.5 -2 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="jam jam-fiverr text-xs w-6 h-6 "
        >
          <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z" />
          <circle cx="14.375" cy="1.875" r="1.875" />
        </svg>
      </a>
    </div>
    <h1 className="text-3xl text-fif font-bold text-center tracking-wide mt-4">
      {name}
    </h1>
    <h2 className="text-xl text-tertiary text-center font-medium tracking-wide mt-2">
      {text}
    </h2>
  </aside>
);

export default OurTeam;
