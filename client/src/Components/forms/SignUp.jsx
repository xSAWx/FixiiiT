import React, { useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "../common/Checkbox";
import Input from "../common/Input";
import { useSignup } from "../../Hooks/useSign";

function SignUp() {
  const [sign, setSign] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: "",
  });

  const { loading, err, signup } = useSignup();

  const submitHandler = async (e) => {
    e.preventDefault();
    await signup(sign);
  };

  return (
    <form onSubmit={submitHandler} className="text-black grid gap-6">
      <h1 className="title mb-8 ">Register</h1>
      <Input
        err={err.username}
        set={setSign}
        name="username"
        title="Username"
        placeholder="Your Username"
      />
      <Input
        err={err.email}
        set={setSign}
        name="email"
        title="Email Address"
        placeholder="Your Email Address"
      />
      <Input
        err={err.password}
        set={setSign}
        name="password"
        type="password"
        title="Password"
        placeholder="Your Password"
      />
      <Input
        err={err.confirmPassword}
        set={setSign}
        name="confirmPassword"
        type="password"
        title="Confirm Password"
        placeholder="Confirm Your Password"
      />
      <Checkbox
        className=" ml-1  "
        onChange={() => setSign({ ...sign, agreeTerms: !sign.agreeTerms })}
        check={sign.agreeTerms}
        text={
          <h1 className=" text-sm">
            I agree to the{" "}
            <Link
              to="/terms-conditions"
              className="text-gray-700 hover:text-tertiary"
            >
              terms and conditions
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy-policy"
              className="text-gray-700 hover:text-tertiary"
            >
              privacy policy
            </Link>
            .
          </h1>
        }
      />
      <button
        type="submit"
        disabled={!sign.agreeTerms}
        className="Button w-32 "
      >
        {sign.agreeTerms && (
          <span className="w-full h-full bg-black/40 cursor-not-allowed " />
        )}
        Signup
      </button>
    </form>
  );
}

export default SignUp;
