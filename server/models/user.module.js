import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    password: { type: String, minlength: 6 },
    isAdmin: { type: Boolean, required: true, default: false },
    isVerified: { type: Boolean, required: true, default: false },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          // Add your email validation logic here
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(v);
        },
        message: "Invalid email address",
      },
    },
    username: { type: String, required: true, minlength: 3 },
    fullName: { type: String },
    phoneNumber: { type: String },
    googleProvider: { type: Boolean, default: false },
    googleSub: { type: String },
    OTP: {
      type: String,
      default: String(Math.floor(100000 + Math.random() * 900000)),
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
