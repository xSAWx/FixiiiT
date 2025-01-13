import React, { useEffect, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";

function Select({
  title = "",
  options,
  err,
  name,
  set,
  number = false,
  value,
}) {
  return (
    <article className=" font-bold">
      {title && (
        <h1 className="font-semibold text-current tracking-widest text-base mb-2.5 ml-1">
          {title}
        </h1>
      )}
      <aside className="relative max-h-20 overflow-y-auto">
        <select
          value={value}
          onChange={(e) => set((old) => ({ ...old, [name]: e.target.value }))}
          className="outline-none  text-black/70  overflow-y-visible relative peer rounded-md py-4 w-full px-4 border border-black/30 focus:border-tertiary"
          name=""
          id=""
        >
          {options?.map((o, i) => (
            <option
              value={o}
              className="rounded-md text-black/70 mt-4 translate-y-2"
            >
              {number && `${i + 1}-`} {o}
            </option>
          ))}
        </select>
        <BsChevronDown className="absolute duration-300 peer-focus-within:rotate-180 z-10 text-xl right-4 top-1/2 -translate-y-1/2" />
      </aside>
      <h1
        className={`text-sm tracking-wider text-red-600 m-1 mt-1.5 duration-200 opacity-0 
            ${err ? "opacity-100 my-3" : "-my-2.5"}`}
      >
        {err}
      </h1>
    </article>
  );
}

export default Select;
