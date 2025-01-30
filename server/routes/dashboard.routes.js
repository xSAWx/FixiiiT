import express from "express";
import { adminAuth, userAuth } from "../utils/userAuth.js";
import { adminDashboard, TotalEachDay } from "../controllers/dashboard.js";

const router = express.Router();

router
  .get("/", userAuth, adminAuth, adminDashboard)
  .get("/total", userAuth, adminAuth, TotalEachDay);

export default router;
