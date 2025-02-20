//////////!   GET MY ORDERS   !/////////

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addressSlice, authSlice } from "../Store/user";
import { useUploadImg } from "../Utils/utils";

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
    getOrders();
  }, []);
  return { loading, err, orders, getOrders };
};

//////////!   CREATE ORDER   !/////////

export const useCreateOrder = (setmdl) => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState({ serialNumber: "", options: "" });
  const { address: a } = addressSlice();
  const { auth } = authSlice();
  const navigate = useNavigate();

  const { image, upload, loading: Iload } = useUploadImg();

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
      const image = await upload(credenitals.img);
      const resp = await axios.post("/api/order", {
        ...credenitals,
        image,
      });

      navigate("/myaccount/orders");
      toast.success("Order Create Successfuly");
    } catch (error) {
      toast.error(error.response.data);
      seterr(true);
      console.log(err);
    } finally {
      setloading(false);
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
    return true;
  }

  return false;
};

const generateRandomString = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ9512368740";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
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

// -----------   ADMIN  -----------   //

//////!   GET ALL ORDERS   !//////

export const useGetAllOrders = ({ filter }) => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [orders, setorders] = useState([]);

  const getAll = async () => {
    let args = [
      `page=${filter.page}`,
      `limit=${filter.limit}`,
      `sort=${filter?.sort}`,
    ];
    if (filter.search) args.push(`search=${filter.search}`);
    if (filter.item) args.push(`item=${filter.item}`);

    try {
      setloading(true);
      const resp = await axios.get(`/api/order?${args.join("&")}`);
      setorders(resp.data);
    } catch (error) {
      seterr(true);
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getAll();
  }, [filter]);

  return { orders, getAll, loading, err };
};

//////!   DELETE ORDER   !//////

export const useDeleteOrderById = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  const Delete = async (_id) => {
    try {
      setloading(true);
      await axios.delete(`/api/order/${_id}`);
      toast.success("order delete successfuly");
    } catch (error) {
      seterr(true);
      console.log(error);
      toast.error("somthing went wrong");
    } finally {
      setloading(false);
    }
  };

  return { loading, err, Delete };
};

//////!   UPDATE ORDER   !//////

export const useUpdateOrder = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  const Update = async (_id, credentials) => {
    try {
      setloading(true);
      await axios.put(`/api/order/${_id}`, credentials);
      toast.success("order updated successfuly");
    } catch (error) {
      seterr(true);
      console.log(error);
      toast.error("somthing went wrong");
    } finally {
      setloading(false);
    }
  };

  return { loading, err, Update };
};
//////!   GET ORDER   !//////

export const useGetOrder = (_id) => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [order, setorder] = useState();

  const getOrder = async () => {
    try {
      setloading(true);
      const resp = await axios.get(`/api/order/${_id}`);
      setorder(resp.data);
    } catch (error) {
      seterr(true);
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  return { loading, err, getOrder, order };
};

//////!   GET COIL   !//////

export const useGetTracking = (Tracking) => {
  const [loading, setloading] = useState();
  const [err, seterr] = useState(false);
  const [tracking, settracking] = useState();

  const getOne = async () => {
    try {
      setloading(true);
      const resp = await axios.get(`/api/order/coil/${Tracking}`);
      settracking(resp.data);
    } catch (error) {
      seterr(true);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (Tracking) getOne();
  }, []);

  return { loading, err, getOne, tracking };
};

//////!   CREATE COIL   !//////

export const useCreateCoil = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  const create = async (credenitals, _id) => {
    try {
      setloading(true);

      const resp = await axios.post(
        `/api/order/coil/${_id || "67901da92d8f14643a385852"}`,
        credenitals
      );

      toast.success("Coil Created Successfuly");
    } catch (error) {
      seterr(true);
      toast.error("Somthing Went Wrong");
    } finally {
      setloading(false);
    }
  };

  return { loading, err, create };
};

//////!   CREATE COILS   !//////

export const useCreateCoils = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  const createMany = async (colis) => {
    try {
      setloading(true);
      await axios.post("/api/order/coils/", colis);
      toast.success("Created Many Colis Successfuly");
    } catch (error) {
      seterr(true);
    } finally {
      setloading(false);
    }
  };

  return { loading, err, createMany };
};

//////!   CONTACT   !//////

export const useContact = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  const contact = async (credenitals) => {
    try {
      setloading(true);
      await axios.post("/api/order/contact", credenitals);
      toast.success("message sent succefully");
    } catch (error) {
      seterr(true);
    } finally {
      setloading(false);
    }
  };

  return { contact, loading, err };
};
