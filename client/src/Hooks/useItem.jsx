////////!    GET ITEMS    !////////

import axios from "axios";
import { useEffect, useState } from "react";

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
