import express from "express";
import { adminAuth, userAuth } from "../utils/userAuth.js";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getMyOrders,
  getOrder,
  lastWeekOrders,
  updateOrder,
} from "../controllers/order.js";
import { addCoil, readCoil, sendCoils } from "../controllers/zrExpress.js";

const router = express.Router();

router
  .post("/", userAuth, createOrder)
  .get("/my", userAuth, getMyOrders)
  .get("/", userAuth, adminAuth, getAllOrders)
  .get("/lastWeek", userAuth, adminAuth, lastWeekOrders);

router
  .get("/coil/:Tracking", userAuth, adminAuth, readCoil)
  .put("/:_id", userAuth, adminAuth, updateOrder)
  .get("/:_id", userAuth, getOrder)
  .delete("/my/:_id", userAuth, deleteOrder)
  .delete("/:_id", userAuth, adminAuth, deleteOrder)
  .post("/coil/:_id", addCoil)
  .post("/coils",sendCoils);

export default router;
