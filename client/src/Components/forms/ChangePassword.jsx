import React, { useState } from "react";
import Input from "../common/Input";
import { useUpdatePassword } from "../../Hooks/useUpdate";
import Alert from "../common/Alert";

function ChangePassword() {
  const [credentials, setcredentials] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { loading, err, update } = useUpdatePassword();

  const submitHandle = async (e) => {
    e.preventDefault();
    await update(credentials);
  };

  console.log(err);

  return (
    <form onSubmit={submitHandle} className="grid gap-6">
      <div>
        <h1 className="title md:!text-4xl !text-3xl mb-2">Password Change</h1>
        <Alert
          show={err?.success}
          className="border-green-700 text-green-700 -my-8"
        >
          Password Changed Successfuly
        </Alert>
      </div>

      <Input
        err={err.oldPassword}
        name="oldPassword"
        title="Old Password *"
        set={setcredentials}
        placeholder="Enter Your Old Password"
        type="password"
      />
      <Input
        err={err.newPassword}
        name="newPassword"
        title="New Password *"
        set={setcredentials}
        placeholder="Enter Your New Password"
        type="password"
      />
      <Input
        err={err.confirmPassword}
        name="confirmPassword"
        title="Confirm New Password *"
        set={setcredentials}
        placeholder="Enter Your New Password Again"
        type="password"
      />
      <button
        disabled={
          !(
            credentials.confirmPassword &&
            credentials.newPassword &&
            credentials.oldPassword
          )
        }
        className="Button w-40 !text-base mt-2"
      >
        {loading ? <div className="loader mx-auto w-6 h-6" /> : "Change"}
      </button>
    </form>
  );
}

export default ChangePassword;
