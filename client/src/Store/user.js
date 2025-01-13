import { create } from "zustand";

export const authSlice = create((set) => ({
  auth: localStorage.getItem("auth") || "",
  setAuth: (auth) =>
    set(() => {
      localStorage.setItem("auth", auth);
      return { auth };
    }),
  isAdmin: false,
  setAdmin: (value) => set(() => ({ isAdmin: value })),
}));

export const accountSlice = create((set) => ({
  account: {
    username: "",
    fullName: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    phoneNumber: "",
    email: "",
  },
  setAccount: (fn) => set((state) => ({ account: fn(state.account) })),
}));

export const addressSlice = create((set) => ({
  address: {
    email: "",
    username: "",
    
    firstName: "",
    phoneNumber: "",
    lastName: "",
    country: "Algeria",
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    state: "Adrar",
    postalCode: "",
  },
  setAddress: (fn) => set((state) => ({ address: fn(state.address) })),
}));
