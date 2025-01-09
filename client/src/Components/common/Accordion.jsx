import { React, useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

function Accordion({ title, children, className, classPrefix }) {
  const [open, setopen] = useState(false);

  const ref = useRef();
  useEffect(() => {
    let handle = (e) => {
      if (!ref.current.contains(e.target)) {
        setopen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });

  return (
    <article
      ref={ref}
      onClick={() => {
        setopen(!open);
      }}
      className={`w-full cursor-pointer   text-[15px] duration-500 fade ${className} ${
        !open && "cursor-pointer"
      }`}
    >
      <aside className="flex gap-4 items-center justify-between   font-semibold ">
        <h1>{title}</h1>
        <BsChevronDown className={`duration-500 ${open && "rotate-180"}`} />
      </aside>
      <div
        className={`grid overflow-hidden transition-all duration-500 ${
          open
            ? "grid-rows-[1fr] opacity-100 mb-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className={`overflow-hidden  w-11/12 ${classPrefix}`}>
          {children}
        </div>
      </div>
    </article>
  );
}

export default Accordion;
