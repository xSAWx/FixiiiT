import React from "react";
import { authSlice } from "../../Store/user";
import BreadCrumbs from "../common/BreadCrumbs";
import ADmin from "../../Pages/Admin/Admin"
function Admin() {
  const { isAdmin } = authSlice();

  if (!isAdmin) return <Navigate to={"/"} />;
  else return <ADmin />;
}

export default Admin;
