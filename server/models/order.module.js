import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    node: { type: String },
    coupon:{type:String}
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
