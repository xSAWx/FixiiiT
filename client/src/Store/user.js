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
