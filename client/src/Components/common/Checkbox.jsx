import React from "react";
import { FaCheck } from "react-icons/fa";

export default function Checkbox({
  onCheck,
  onChange,
  check,
  className,
  text,
  disabled = false,
}) {
  return (
    <article
      onClick={() => {
        !disabled && onChange ? onChange() : onCheck(!check);
      }}
      className={`flex gap-2 items-center cursor-pointer  font-bold tracking-wide text-[16px] ${
        disabled && "!cursor-not-allowed opacity-50"
      }`}
    >
      <div
        className={`w-5 h-5 border border-gray-600 rounded-[5px] text-[12px] grid place-content-center  duration-300 ${className}
            ${check && "bg-tertiary !border-tertiary"}
            ${disabled && "!bg-gray-700 border-gray-800"}
            `}
      >
        {" "}
        <FaCheck
          className={`duration-300 text-white ${!check && "scale-0 opacity-0"}`}
        />
      </div>
      {text}
    </article>
  );
}
