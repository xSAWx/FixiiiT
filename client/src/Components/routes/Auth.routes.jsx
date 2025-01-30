import React, { useEffect } from "react";
import { authSlice } from "../../Store/user";
import { Navigate, Outlet } from "react-router-dom";
import { useLogout } from "../../Hooks/useSign";

function Auth() {
  const { auth } = authSlice();

  const { noProfile } = useLogout();

  useEffect(() => {
    (async () => await noProfile())();
  }, []);

  if (!auth) return <Navigate to={"/sign"} />;
  else return <Outlet />;
}

export default Auth;
