import React, { useEffect, useState } from "react";
import BreadCrumbs from "../../Components/common/BreadCrumbs";
import Login from "../../Components/forms/Login";
import SignUp from "../../Components/forms/SignUp";
import { authSlice } from "../../Store/user";
import { useNavigate } from "react-router-dom";
import Forgot from "../../Components/forms/Forgot";

function Sign() {
  const [forgot, setforgot] = useState(false);
  const { auth } = authSlice();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) navigate("/myaccount");
  }, []);

  if (auth) navigate("/myaccount");
  else
    return (
      <section>
        <BreadCrumbs
          navs={["Home", "SIGN"]}
          routes={["/", "/sign"]}
          title="My Account"
        />

        {forgot ? (
          <Forgot />
        ) : (
          <article className="max-w-7xl py-24 mx-auto w-11/12  grid md:grid-cols-2 md:gap-16 gap-8">
            <>
              <Login setforgot={setforgot} />
              <SignUp />
            </>
          </article>
        )}
      </section>
    );
}

export default Sign;
