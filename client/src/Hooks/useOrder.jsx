//////////!   GET MY ORDERS   !/////////

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addressSlice, authSlice } from "../Store/user";

export const useGetMyOrders = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [orders, setorders] = useState([]);

  const getOrders = async () => {
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
  };

  useEffect(() => {
    getOrders()
  }, []);
  return { loading, err, orders , getOrders };
};

//////////!   CREATE ORDER   !/////////

export const useCreateOrder = (setmdl) => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState({ serialNumber: "", options: "" });
  const { address: a } = addressSlice();
  const { auth } = authSlice();
  const navigate = useNavigate();

  const create = async (credenitals) => {
    if (!auth) {
      navigate("/myaccount");
      return;
    }
    if (checkAdress(a)) {
      setmdl(true);
      return;
    }
    setloading(true);
    try {
      const resp = await axios.post("/api/order", credenitals);

      navigate("/myaccount/orders");
      toast.success("Order Create Successfuly");
    } catch (error) {
      toast.error(error.response.data);
      seterr(true);
      console.log(err);
    }
  };

  return { loading, create, err };
};

const checkAdress = (a) => {
  if (
    a.firstName.length < 2 ||
    !a.phoneNumber.match(/^(0(?:[5|6|7|9])\d{8})$/) ||
    a.lastName.length < 2 ||
    a.streetAddress1.length < 6 ||
    a.city.length < 5 ||
    !a.postalCode.match(/^\d+$/) ||
    !a.state ||
    !a.country ||
    !a.email ||
    !a.username
  ) {
    console.log(a);
    return true;
  }

  return false;
};

//////////!   DELETE MY ORDER   !/////////

export const useDeleteOrder = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState();

  const Delete = async (_id) => {
    try {
      setloading(true);
      const resp = await axios.delete(`/api/order/my/${_id}`);
    } catch (error) {
      seterr(true);
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return { loading, err, Delete };
};
