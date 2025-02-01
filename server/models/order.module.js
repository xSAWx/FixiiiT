import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
    image: { type: String },
    serialNumber: { type: String },
    totalPrice: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    options: [{ type: mongoose.Schema.Types.ObjectId, ref: "Option" }],
    node: { type: String },
    coupon: { type: String },
    Tracking: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
