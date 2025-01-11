import React from "react";

function TextArea({
  placeholder = "",
  name,
  set,
  title = "",
  children,
  rows = 3,
}) {
  return (
    <article>
      {true && (
        <h1 className="font-semibold  tracking-widest text-base mb-2.5 ml-1">
          {title}
        </h1>
      )}
      <textarea
        rows={rows}
        onChange={(e) => set((old) => ({ ...old, [name]: e.target.value }))}
        placeholder={placeholder}
        className="text-base p-4 focus:border-tertiary border border-black/40 rounded-md w-full font-medium tracking-wider bg-white text-black placeholder:tracking-widest placeholder:text-black/50 outline-none"
      >
        {children}
      </textarea>
    </article>
  );
}

export default TextArea;
