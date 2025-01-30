import axios from "axios";
import { useEffect, useState } from "react";

////////!    SITE INFO    !////////

export const useSiteInfo = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [info, setinfo] = useState();
  const [totalPrice, settotalPrice] = useState([]);
  const getInfo = async () => {
    try {
      setloading(true);
      const resp = await axios.get("/api/dashboard");
      setinfo(resp.data);
    } catch (error) {
      console.log(error);
      seterr(true);
    } finally {
      setloading(false);
    }
  };

  const getTotalPrice = async () => {
    try {
      setloading(true);
      const resp = await axios.get("/api/dashboard/total");
      settotalPrice(resp.data);
    } catch (error) {
      console.log(error);
      seterr(true);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getInfo();
    getTotalPrice();
  }, []);

  return { loading, err, getInfo, info, getTotalPrice, totalPrice };
};
