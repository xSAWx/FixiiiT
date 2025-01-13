import React from "react";
import BreadCrumbs from "../Components/common/BreadCrumbs";
import Button from "../Components/common/Button";
import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate()

  return (
    <div>
      <BreadCrumbs
        navs={["Home", "No Page Found"]}
        routes={["/", "/"]}
        title="NOT FOUND"
      />
      <div className="pb-20 grid place-content-center text-center font-bold tracking-wider">
        <h1 className="lg:text-[300px] text-[90px]  text-qua font-sans">
          4<span className="text-fif">0</span>4
        </h1>
        <h2 className="text-3xl text-fif my-6">4 Oops! page is not found</h2>
        <h3 className="text-black/60 mb-8">Sorry, but the page you are looking for does not exist.</h3>
        <Button onClick={()=>navigate("/")} className="w-52 mx-auto">Back To Home Page</Button>
      </div>
    </div>
  );
}

export default Error404;
