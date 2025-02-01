import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

function Dropdown({
  component,
  children,
  direction = { x: "center", y: "bottom" },
  classPrefix = "",
  className,
  chevron = true,
}) {
  const [show, setopen] = useState(false);
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
    <aside
      onClick={() => setopen(!show)}
      ref={ref}
      className={`relative  ${classPrefix}`}
    >
      <div className="flex gap-2 items-center hover:text-tertiary  cursor-pointer">
        {React.cloneElement(component, {
          // onClick: ,
          onBlur: () => setopen(false),
        })}
        {chevron && (
          <FaChevronDown
            className={`text-sm text-current duration-200 ${
              show && "rotate-180"
            } ${chevron}`}
          />
        )}
      </div>
      <div
        className={`absolute duration-200 z-40 text-qua
        ${Direction(direction.x, direction.y)} 
        ${className}
        ${show ? "opacity-100" : "pointer-events-none opacity-0"}
        
        `}
      >
        {children}
      </div>
    </aside>
  );
}

const Direction = (row = "center", col = "bottom") => {
  let x = "";
  if (row === "center") x = "left-1/2 -translate-x-1/2";
  if (row === "left") x = "left-0";
  if (row === "right") x = "right-0";
  let y = "";
  if (col === "bottom") y = "top-full translate-y-2.5";
  if (col === "top") y = "bottom-full -translate-y-2.5";
  return x + " " + y;
};

export default Dropdown;
