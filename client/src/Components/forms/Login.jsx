import React, { useState } from "react";
import Input from "../../Components/common/Input";
import Checkbox from "../../Components/common/Checkbox";
import { useLogin } from "../../Hooks/useSign";

function Login({ setforgot }) {
  const [Login, setlogin] = useState({ email: "", password: "" });
  const [remember, setremember] = useState(false);
  const { loading, err, login } = useLogin();

  const submitHandler = async (e) => {
    e.preventDefault();
    await login(Login);
  };

  return (
    <form onSubmit={submitHandler} className="text-black self-start grid gap-6">
      <h1 className="title mb-8 ">Login</h1>
      <Input
      err={err.email}
        set={setlogin}
        name="email"
        title="Email Address"
        placeholder="Your Email Address"
      />
      <Input
      err={err.password}
        set={setlogin}
        name="password"
        type="password"
        title="Password"
        placeholder="Your Password"
      />
      <aside className="grid grid-cols-2 w-full items-center">
        <Checkbox
          check={remember}
          onCheck={setremember}
          text="Remember me"
          className="m-1"
        />
        <h1
          onClick={() => setforgot(true)}
          className="justify-self-end cursor-pointer text-tertiary hover:text-orange-700 duration-200 font-semibold"
        >
          Forgot Your Password?
        </h1>
      </aside>
      <button className="Button w-32">
        {loading ? <div className="loader w-6 h-6 mx-auto" /> : "Login"}
      </button>
    </form>
  );
}

export default Login;
