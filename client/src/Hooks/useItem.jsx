////////!    GET ITEMS    !////////

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const getItemsByCategory = (_id) => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [items, setitems] = useState([]);

  useEffect(() => {
    (async () => {
      setloading(true);
      try {
        const resp = await axios.get(`/api/item?category=${_id}`);

        setitems(resp.data);
      } catch (error) {
        seterr(true);
        console.log(error);
      } finally {
        setloading(false);
      }
    })();
  }, [_id]);

  return { loading, err, items };
};

////////!    GET OPTIONS    !////////

export const useGetOption = (_id) => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [options, setoptions] = useState([]);

  useEffect(() => {
    if (_id)
      (async () => {
        setloading(true);
        try {
          const resp = await axios.get(`/api/item/options/${_id}`);
          setoptions(resp.data);
        } catch (error) {
          seterr(true);
          console.log(error);
        } finally {
          setloading(false);
        }
      })();
  }, [_id]);

  return { err, loading, options };
};

////////!    GET ALL OPTIONS    !////////

export const useGetAllItems = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [items, setitems] = useState([]);

  const getItems = async () => {
    try {
      setloading(true);
      const resp = await axios.get("/api/item");
      setitems(resp.data);
    } catch (error) {
      console.log(error);
      seterr(true);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return { loading, err, getItems, items };
};

////////!    GET ONE ITEM    !////////

export const useGetItem = (_id) => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [item, setitem] = useState();
  const [opts, setopt] = useState([]);

  const getItem = async () => {
    try {
      const resp = await axios.get(`/api/item/${_id}`);
      const resp2 = await axios.get(`/api/item/options/${_id}`);

      setitem(resp.data);
      setopt(resp2.data);
    } catch (error) {
      console.log(error);
      seterr(true);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return { item, err, loading, getItem, opts };
};

////////!    CREATE ITEM    !////////

export const useCreateItem = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState({ name: "" });
  const naivgate = useNavigate();
  const create = async (credentials, options) => {
    try {
      if (checkErr(credentials, options, seterr)) return;

      setloading(true);
      const resp = await axios.post(`/api/item`, credentials);

      await axios.post(
        "/api/item/options",
        options.map((e) => ({ ...e, item: resp.data._id }))
      );
      seterr({ name: "" });
      toast.success("Item Created Successfuly");
      naivgate("/admin/items");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    } finally {
      setloading(false);
    }
  };

  return { create, err, loading };
};
const checkErr = ({ name }, options, seterr) => {
  if ((!name, !options.length)) {
    seterr({
      name: !name ? "Please Enter A Name" : "",
      options: !options.length ? "At Leaset Enter One Option" : "",
    });
    return true;
  }
  return false;
};
////////!    DELETE ITEM    !////////

export const useDeleteItem = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  const Delete = async (_id) => {
    try {
      await axios.delete(`/api/item/${_id}`);
      seterr(false);
      toast.error("Item Deleted Successfuly");
    } catch (error) {
      console.log(error);
      seterr(true);
      toast.err("Something Went Wrong");
    } finally {
      setloading(false);
    }
  };
  return { err, loading, Delete };
};
////////!    UPDATE ITEM    !////////

export const useUpdateItem = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  const update = async (credentials, options, _id) => {
    try {
      const NewO = options
        .filter((e) => !!e.name)
        .map((o) => ({
          name: o.name,
          item: _id,
          price: o?.price,
          description: o?.description,
        }));

      await axios.put("/api/item/optionss", NewO);

      await axios.put(`/api/item/${_id}`, credentials);
      toast.success("Item Updated Successfuly");

      setloading(true);
    } catch (error) {
      console.log(err);
      seterr(true);
    } finally {
      setloading(false);
    }
  };
  return { loading, err, update };
};

////////!    DELETE OPTION    !////////

export const useDeleteOption = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  const Delete = async (_id) => {
    try {
      setloading(true);
      await axios.delete(`/api/item/option/${_id}`);
    } catch (error) {
      console.log(error);
      seterr(true);
    } finally {
      setloading(false);
    }
  };

  return { Delete, loading, err };
};
