////////!    GET CATEEGORIES    !////////

import axios from "axios";
import { useEffect, useState } from "react";

export const useGetCategories = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    (async () => {
      setloading(true);
      try {
        const resp = await axios.get("/api/category");
        setcategories(resp.data);
      } catch (error) {
        seterr(true);
        console.log(error);
      } finally {
        setloading(false);
      }
    })();
  }, []);

  return { err, loading, categories };
};

////////!    GET ONE CATEGORY    !////////

export const useGetCategory = (_id) => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [category, setcategory] = useState();

  useEffect(() => {
    (async () => {
        setloading(true)
      try {
        const resp = await axios.get(`/api/category/${_id}`);
        console.log(resp.data);
        
        setcategory(resp.data);
      } catch (error) {
        seterr(true);
        console.log(error);
      } finally {
        setloading(false);
      }
    })();
  }, []);

  return { loading, err, category };
};
