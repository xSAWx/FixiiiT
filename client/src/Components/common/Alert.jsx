import React, { useEffect, useRef, useState } from "react";

function Alert({ show, color, children, className }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 4000); // 8000 milliseconds = 8 seconds

    return () => clearTimeout(timer); 
  }, []);


  return (
    <article
      className={`font-bold tracking-wide text-center border border-black/30 p-4  duration-500 rounded-lg  ${className}
        ${
          show
            ? "scale-100 opacity-100 !my-2"
            : "scale-0 opacity-0  pointer-events-none "
        }
        `}
    >
      {children}
    </article>
  );
}

export default Alert;
