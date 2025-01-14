//////////!   GET MY ORDERS   !/////////

import axios from "axios";
import { useEffect, useState } from "react";

export const useGetMyOrders = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [orders, setorders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setloading(true);
        const resp = await axios.get("/api/order/my");
        setorders(resp.data);
      } catch (error) {
        seterr(true);
        console.log(error);
      } finally {
        setloading(false);
      }
    })();
  }, []);
  return { loading, err, orders };
};
