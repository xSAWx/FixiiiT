import axios from "axios";
import { useEffect, useState } from "react";
import { addressSlice, authSlice } from "../Store/user";

//////!   UPDATE PASSWORD   !//////

export const useUpdatePassword = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const update = async (credentials) => {
    if (updateHandler(credentials, seterr)) return;
    setloading(true);
    try {
      const resp = await axios.put("/api/auth/profile", credentials);
      if (resp) seterr({ success: true });
    } catch (error) {
      if (error.response.status === 406)
        return seterr({ oldPassword: "Your Old Password Is Wrong" });
      seterr({ oldPassword: "Somthing Went Wrong" });
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  return { loading, err, update };
};

const updateHandler = (
  { oldPassword, newPassword, confirmPassword },
  seterr
) => {
  if (newPassword.length < 8 || newPassword !== confirmPassword) {
    seterr((err) => ({
      newPassword: newPassword.length < 8 ? "Please Enter Valid Password" : "",
      confirmPassword:
        confirmPassword !== newPassword ? "Please Enter The Same Password" : "",
    }));
    return true;
  }
  return false;
};

//////!   UPDATE ADDRESS   !//////

export const useUpdateAddress = (setmdl) => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState({});
  const { address, setAddress } = addressSlice();

  const update = async () => {
    console.log(err);
    if (addressError(address, seterr)) return;
    setloading(true);
    try {
      const resp = await axios.put("/api/auth/profile", {
        firstName: address?.firstName,
        lastName: address?.lastName,
        state: address?.state,
        city: address?.city,
        phoneNumber: address?.phoneNumber,
        streetAddress1: address?.streetAddress,
        postalCode: address?.postalCode,
        streetAddress1: address?.streetAddress1,
        streetAddress2: address?.streetAddress2,
      });

      if (setmdl) setmdl(false);

      seterr({ success: true });
    } catch (error) {
      seterr({ fail: "Somthing Went Wrong" });
    } finally {
      setloading(false);
    }
  };

  return { loading, err, update };
};

const addressError = (
  { firstName, phoneNumber, lastName, streetAddress1, city, postalCode },
  seterr
) => {
  if (firstName.length < 2) console.log("x");

  if (
    firstName.length < 2 ||
    !phoneNumber.match(/^(0(?:[5|6|7|9])\d{8})$/) ||
    lastName.length < 2 ||
    streetAddress1.length < 6 ||
    city.length < 5 ||
    !postalCode.match(/^\d+$/)
  ) {
    seterr({
      firstName: firstName.length < 3 ? "Please Enter Valid Firstname" : "",
      lastName: lastName.length < 2 ? "Please Enter Valid Firstname" : "",
      phoneNumber: !phoneNumber.match(/^(0(?:[5|6|7|9])\d{8})$/)
        ? "Please Enter Valid Phonenumber"
        : "",
      streetAddress1:
        streetAddress1.length < 6 ? "Pelase Enter Valid Streetaddress" : "",
      city: city.length < 5 ? "Please Enter Valid (baladia)" : "",
      postalCode: !postalCode.match(/^\d+$/)
        ? "Please Enter Valid PostalCode (ZIP)"
        : "",
    });
    return true;
  }
  seterr({});
  return false;
};

//////!   GET ADDRESS   !//////

export const useGetAddress = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState({});
  const { setAddress } = addressSlice();
  const [admin, setadmin] = useState(false);
  const { setAdmin } = authSlice();

  useEffect(() => {
    (async () => {
      setloading(true);
      try {
        const { data } = await axios.get("/api/auth/profile");
        if (data) {
          setAddress((state) => ({
            ...state,
            firstName: data?.firstName || "",
            lastName: data?.lastName || "",
            state: data?.state || "",
            city: data?.city || "",
            phoneNumber: data?.phoneNumber || "",
            streetAddress1: data?.streetAddress || "",
            postalCode: data?.postalCode || "",
            streetAddress1: data?.streetAddress1 || "",
            streetAddress2: data?.streetAddress2 || "",
            email: data?.email || "",
            username: data?.username || "",
          }));
          setadmin(data.isAdmin);
          setAdmin(data.isAdmin);
        }
      } catch (error) {
        seterr("Something Went Wrong");
        console.log(error);
      } finally {
        setloading(false);
      }
    })();
  }, []);

  return { loading, err, admin };
};
