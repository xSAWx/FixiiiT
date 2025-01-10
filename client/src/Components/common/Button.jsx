import React from "react";
import { useNavigate } from "react-router-dom";

function Button({
  type = "button",
  className = "",
  children,
  disbaled,
  onClick,
  to,
}) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        to && navigate(to);
        onClick();
      }}
      type={type}
      className={`button text-white  font-semibold tracking-wide    text-[17px] relative z-10 px-4 py-3 bg-gradient-to-r from-[#FC962B] overflow-hidden to-[#EE572A] rounded-full ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
