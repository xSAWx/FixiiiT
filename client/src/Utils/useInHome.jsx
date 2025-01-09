import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useInHome() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== "/") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [pathname]);
}

export default useInHome;
