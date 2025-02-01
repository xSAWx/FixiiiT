import express from "express";
import { adminAuth, userAuth } from "../utils/userAuth.js";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getMyOrders,
  getOrder,
  updateOrder,
} from "../controllers/order.js";
import { addCoil, readCoil } from "../controllers/zrExpress.js";

const router = express.Router();

router
  .post("/", userAuth, createOrder)
  .get("/my", userAuth, getMyOrders)
  .get("/", userAuth, adminAuth, getAllOrders)
  .put("/:_id", userAuth, adminAuth, updateOrder)
  .get("/:_id", userAuth, getOrder)
  .delete("/my/:_id", userAuth, deleteOrder)
  .delete("/:_id", userAuth, adminAuth, deleteOrder)
  .post("/coil/:_id", addCoil)
  .get("/coil/:Tracking", userAuth, adminAuth, readCoil);

export default router;
