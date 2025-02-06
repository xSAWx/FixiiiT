import React, { useEffect, useState } from "react";
import { authSlice } from "../../Store/user";
import { Navigate, Outlet } from "react-router-dom";
import { useLogout } from "../../Hooks/useSign";
import OTP from "../forms/OTP";

function Auth() {
  const { auth } = authSlice();
  const [open, setopen] = useState(false);

  const { noProfile } = useLogout();
  const { isVerified } = authSlice();

  console.log({ isVerified, open });

  useEffect(() => {
    (async () => await noProfile())();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVerified) setopen(true);
      else {
        setopen(false);
      }
    }, 500); // 1000ms = 1 second

    // Cleanup function
    return () => clearTimeout(timer);
  }, [isVerified]); // Empty dependency array = runs on mount

  if (!auth) return <Navigate to={"/sign"} />;
  else
    return (
      <>
        <Outlet />
        <OTP open={open} setopen={setopen} key={9512368740} />
      </>
    );
}

export default Auth;
