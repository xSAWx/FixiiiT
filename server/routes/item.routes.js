import express from "express";
import { adminAuth, userAuth } from "../utils/userAuth.js";
import {
  createItem,
  deleteItem,
  getManyItems,
  getOneItem,
  updateItem,
} from "../controllers/item.js";

const router = express.Router();

router.post("/", userAuth, adminAuth, createItem);
router.put("/:_id", userAuth, adminAuth, updateItem);
router.delete("/:_id", userAuth, adminAuth, deleteItem);
router.get("/:_id", getOneItem);
router.get("/", getManyItems);

export default router;
