import React from "react";
import { MdChevronRight } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function BreadCrumbs({ title = "", routes, navs }) {
  const { pathname } = useLocation();
  return (
    <section className="w-full h-80 grid place-content-center  bg-gradient-to-r from-[#FFEBE5] to-[#E4E7FE]">
      <aside>
        <h1 className="text-[#0D0239] lg:text-[50px] text-[30px] mb-3 text-center font-bold">{title}</h1>
        <div className="flex gap-3 justify-center">
          {navs?.map((e, i) => (
            <>
              <Link
                className={` ${
                  i + 1 !== navs.length
                    ? "text-black/50 hover:text-tertiary"
                    : ""
                }`}
                to={routes[i]}
              >
                {e}
              </Link>
              {i + 1 !== navs.length && (
                <MdChevronRight className="text-2xl text-qua opacity-60" />
              )}
            </>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default BreadCrumbs;
