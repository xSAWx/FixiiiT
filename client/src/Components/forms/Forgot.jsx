import React, { useState } from "react";
import Input from "../common/Input";

function Forgot() {
  const [credentials, setcredentials] = useState({ email:"" });

  return (
    <section className="max-w-7xl py-24 mx-auto w-10/12   md:gap-16 gap-8">
      <h1 className="text-black/60 text-lg font-medium mb-8 tracking-wide">
        Lost your password? Please enter your username or email address. You
        will receive a link to create a new password via email.
      </h1>
      <Input
        name={"email"}
        set={setcredentials}
        placeholder="Enter Your Email"
        title="Email"
      />
      <button disabled={!credentials.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)} className="Button w-32 mt-6">Reset </button>
    </section>
  );
}

export default Forgot;
