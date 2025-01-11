import React, { useEffect } from "react";
import { authSlice } from "../../Store/user";
import { Navigate, Outlet } from "react-router-dom";

function Auth() {
  const { auth } = authSlice();

  if (!auth) return <Navigate to={"/sign"} />;
  else return <Outlet />;
}

export default Auth;
