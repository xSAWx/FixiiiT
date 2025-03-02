import { useEffect, useState } from "react";
import axios from "axios";
import { authSlice } from "../Store/user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetAddress } from "./useUpdate";

//////!   LOGIN   !//////

export const useLogin = () => {
  const [loading, setloading] = useState(false);
  const [err, setErr] = useState({ email: "", password: "" });
  const { setAuth } = authSlice();
  const { getAddress } = useGetAddress();

  const login = async ({ email, password }) => {
    if (
      !email ||
      !password ||
      !/^(?=.*\d).{6,}$/.test(password) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setErr({
        password: !password
          ? "Please fill the input with your password"
          : /^(?=.*\d).{6,}$/.test(password)
          ? ""
          : "Please Enter Valid Password",
        email: !email
          ? "Please fill the input with your email"
          : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
          ? ""
          : "Please Enter Valid Email",
      });
      return;
    }
    setloading(true);
    try {
      const resp = await axios.post("/api/auth/", { email, password });
      setErr({ email: "", password: "" });
      setAuth(resp.data._id);
      await getAddress();
    } catch (error) {
      if (error.response.status === 402 || error.response.status === 403)
        setErr({
          password: error.response.status === 402 ? "Incorrect Password" : "",
          email: error.response.status === 403 ? "Email Not Found" : "",
        });
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return { login, loading, err };
};

//////!   SIGNUP   !//////

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });
  const { setAuth } = authSlice();
  const { getAddress } = useGetAddress();

  const signup = async (props) => {
    if (handleSignup({ ...props, setErr })) return;
    setLoading(true);
    try {
      const resp = await axios.post("/api/auth/signup", props);
      setErr({ email: "", password: "", username: "", confirmPassword: "" });
      setAuth(resp.data._id);
      await getAddress();
      navigate("/");
    } catch (error) {
      if (error.response.status === 402)
        setErr({ ...err, email: "Email Already Exist" });
      if (error.response.status === 403)
        setErr({ ...err, username: "Username Already Exist" });
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup, err };
};

//////!   SIGN GOOGLE   !//////

export const useSignGoogle = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState("");
  const { setAuth } = authSlice();

  const signGoogle = async (info) => {
    try {
      setloading(true);
      const resp = await axios.post("/api/auth/googleSign", info);

      seterr("");
      setAuth(resp.data._id);
      console.log(resp);
    } catch (error) {
      seterr(error);
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  return { signGoogle, loading, err };
};

//////!   SIGN OTP   !//////

export const useSignOtp = () => {
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState({ send: "", check: "" });
  const navigate = useNavigate();

  const sendOtp = async () => {
    setloading(true);
    try {
      const resp = await axios.get("/api/auth/sendOTP");
      if (resp.data) {
      }
    } catch (error) {
      setmessage({ ...message, send: "Somthing Went Wrong " });
      console.log({ error });
    } finally {
      setloading(false);
    }
  };

  const checkOtp = async (OTP) => {
    setloading(true);
    try {
      const resp = await axios.post("/api/auth/checkOTP", { OTP });
      if (resp.data) {
        setTimeout(() => {
          window.location.reload();
        }, 700);
      }
    } catch (error) {
      setmessage({ ...message, check: "OTP Expired" });
    } finally {
      setloading(false);
    }
  };

  return { sendOtp, loading, message, checkOtp };
};

//////!   SIGN PASSWORD   !//////

export const useReset = () => {
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState({ failed: false, mssg: "" });

  const sendPassword = async (email) => {
    setloading(true);
    try {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !email)
        return setmessage({ failed: true, mssg: "Please Enter Valid Email" });
      const resp = await axios.post("/api/auth/resetPassword", { email });
      if (resp.data) {
        setmessage({ failed: false, mssg: "New Password Sent To Your Email" });
      }
    } catch (error) {
      error.response.status === 406 &&
        setmessage({ failed: true, mssg: "Try To Login With Google " });
      error.response.status === 409 &&
        setmessage({ failed: true, mssg: "Email Not Found" });
      error.response.status === 409 && console.log("xx");

      console.log({ error });
    } finally {
      setloading(false);
    }
  };

  return { loading, message, sendPassword };
};

//////!   LOGOUT   !//////

export const useLogout = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState("");
  const { setAuth } = authSlice();

  const logout = async () => {
    setloading(true);
    try {
      setAuth("");
      localStorage.clear();
      await axios.get("/api/auth/logout");
      toast.error("logged out successfuly");
      window.location.reload();
    } catch (error) {
      if (error.response.status === 401) seterr("Not Authorized");

      console.log({ error });
    } finally {
      setloading(false);
    }
  };

  const noProfile = async () => {
    setloading(true);
    try {
      const resp = await axios.get("/api/auth/profile");
    } catch (error) {
      if (error.response.data.error === "UnAuthorized - No Token Provided")
        await logout();
      console.log(error);
      seterr(true);
    } finally {
      setloading(false);
    }
  };

  return { loading, err, logout, noProfile };
};

const handleSignup = ({
  email,
  password,
  confirmPassword,
  username,
  setErr,
}) => {
  if (
    !email ||
    !password ||
    !username ||
    !confirmPassword ||
    !/.{3,}/.test(username) ||
    !/^(?=.*\d).{6,}$/.test(password) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    password !== confirmPassword
  ) {
    setErr(() => ({
      password: !password
        ? "Please fill the input with new password"
        : /^(?=.*\d).{6,}$/.test(password)
        ? ""
        : "Please Enter Valid Password",
      email: !email
        ? "Please fill the input with your email"
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? ""
        : "Please Enter Valid Email",
      username: !username
        ? "Please fill the input with a username"
        : /.{3,}/.test(username)
        ? ""
        : "Please Enter Valid Username",
      confirmPassword: !confirmPassword
        ? "Please fill the input with same password"
        : confirmPassword !== password
        ? "Please Enter The Same Password"
        : "",
    }));
    return true;
  }
  return false;
};

//////!   GET ONE USER   !//////

export const useGetOneUser = (_id) => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [user, setuser] = useState();
  const getOne = async () => {
    try {
      setloading(true);
      const resp = await axios.get(`/api/auth/getone/${_id}`);
      setuser(resp.data);
    } catch (error) {
      seterr(true);
    } finally {
      setloading(true);
    }
  };

  useEffect(() => {
    if (_id) getOne();
  }, []);
  return { loading, err, getOne, user };
};

//////!   SEND NEW PASSWORD   !//////

export const useSendPass = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const navigate = useNavigate();

  const send = async (email) => {
    try {
      setloading(true);
      await axios.post("/api/auth/resetPassword", email);
      navigate("/sign");
      toast.success("New Password Sent To You Email");
    } catch (error) {
      seterr(true);
      toast.error("Somthing Went Wrong");
      seterr(true);
    } finally {
      setloading(false);
    }
  };

  return { send, loading, err };
};

// -----------   ADMIN  -----------   //

//////!   GET ALL USERS   !//////

export const useGetAllUsers = ({ page, filter }) => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [users, setusers] = useState([]);

  const getAll = async () => {
    let args = [`page=${page}`, `limit=${filter.limit}`, `sort=${filter.sort}`];
    if (filter.search) args.push(`search=${filter.search}`);

    try {
      setloading(true);
      const resp = await axios.get(`/api/auth/all?${args.join("&")}`);
      setusers(resp.data);
    } catch (error) {
      seterr(true);
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getAll();
  }, [page, filter]);

  return { users, getAll, loading, err };
};

//////!   REMOVE USER   !//////

export const useDeleteUser = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  const Delete = async (_id) => {
    try {
      const resp = await axios.delete(`/api/auth/delete/${_id}`);
      toast.error("Account Deleted");
    } catch (error) {
      seterr(true);
      console.log(error);
    }
  };

  return { loading, err, Delete };
};

//////!   UPDATE USER   !//////

export const useUpdateUser = (_id) => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  const update = async (credentials) => {
    try {
      setloading(true);
      const resp = await axios.put(`/api/auth/update/${_id}`, credentials);
      toast.success("Profile Updated Successfuly");
    } catch (error) {
      toast.error("Somthing Went Wrong");
      seterr(true);
    } finally {
      setloading(false);
    }
  };

  return { update, loading, err };
};
