import express from "express";
import { adminAuth, userAuth } from "../utils/userAuth.js";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../controllers/category.js";

const router = express.Router();

router
  .post("/", userAuth, adminAuth, createCategory)
  .get("/", getCategories)
  .put("/:_id", userAuth, adminAuth, updateCategory)
  .delete("/:_id", deleteCategory, adminAuth, updateCategory)
  .get("/:_id", getCategory);

export default router;
