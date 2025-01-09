import React from "react";

function Button({ type = "button", className = "", children, disbaled }) {
  return (
    <button
      type={type}
      className={`button text-white  font-semibold tracking-wide    text-[17px] relative z-10 px-4 py-3 bg-gradient-to-r from-[#FC962B] overflow-hidden to-[#EE572A] rounded-full ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
