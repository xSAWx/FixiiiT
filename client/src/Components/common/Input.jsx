import React, { useRef, useState } from "react";
import { focusing } from "../../Utils/utils";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function Input({
  onChange,
  className,
  classPrefix = "",
  classs = "",
  title,
  placeholder = "",
  type = "text",
  name,
  set,
  err,
  disabled = false,
  value,
  icon,
  wait = false,
}) {
  const [focus, setfocus] = useState(false);
  const [hide, sethide] = useState(false);
  const timeoutRef = useRef(null);

  const handleChange = (e) => {
    clearTimeout(timeoutRef.current); // Clear previous timeout
    timeoutRef.current = setTimeout(() => {
      // Perform server-side action here (e.g., API call)
      console.log("Input value:", e.target.value);
      onChange
        ? onChange
        : set((state) => ({ ...state, [name]: e.target.value }));
      // Clear the timeout ref after the action is completed
      timeoutRef.current = null;
    }, 500); // Adjust the delay as needed (in milliseconds)
  };

  return (
    <article
      className={`w-full  duration-500 relative 
        ${focus && "text-tertiary"} ${className} ${disabled && "opacity-60"}`}
    >
      {title && (
        <h1 className="font-semibold text-current tracking-widest text-base mb-2.5 ml-1">
          {title}
        </h1>
      )}
      <aside
        className={`rounded-md w-full relative overflow-hidden border-black/30 duration-500 bg-white  border items-center px-2 flex 
          ${focus && "!border-tertiary "}
          ${err && "!border-red-600 !bg-red-600 !bg-opacity-10"}
          ${classs}
          `}
      >
        {icon && React.cloneElement(icon, { className: "text-2xl " })}
        <input
          ref={timeoutRef}
          {...focusing(setfocus)}
          type={type == "password" ? (hide ? "text" : "password") : type}
          className={`w-full h-full p-4 text-base font-medium tracking-wider bg-transparent text-black placeholder:tracking-widest placeholder:text-black/50 outline-none  ${classPrefix}`}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={(e) => {
            wait
              ? handleChange(e)
              : onChange
              ? onChange(e)
              : set((state) => ({ ...state, [name]: e.target.value }));
          }}
        />
        {type === "password" &&
          (!hide ? (
            <BsEyeFill
              onClick={() => {
                sethide(true);
              }}
              className={`text-gray-600 text-[24px] cursor-pointer hover:text-gray-400 duration-300 `}
            />
          ) : (
            <BsEyeSlashFill
              onClick={() => {
                sethide(false);
              }}
              className="text-gray-600 text-[24px] cursor-pointer hover:text-gray-400"
            />
          ))}
        {disabled && (
          <div className="w-full h-full absolute -translate-x-3 bg-white/15 cursor-not-allowed" />
        )}
      </aside>
      <h1
        className={`text-sm tracking-wider m-1 mt-1.5 text-red-600 font-medium duration-200 opacity-0 ${
          err ? "opacity-100 my-3" : "-my-2.5"
        }`}
      >
        {err}
      </h1>
    </article>
  );
}

export default Input;
