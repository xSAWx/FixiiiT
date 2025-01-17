//////////!   GET MY ORDERS   !/////////

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

//////////!   CREATE  ORDER   !/////////

export const useCreateOrder = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState({ serialNumber: "", options: "" });
  const navigate = useNavigate()
  const create = async (credenitals) => {
    setloading(true);
    try {
      const resp = await axios.post("/api/order", credenitals);
      
      navigate("/myaccount/orders")
      toast.success("Order Create Successfuly")
    } catch (error) {
      toast.success("qsdqsd")
      seterr(true);
      console.log(err);
    }
  };

  return { loading, create, err };
};
