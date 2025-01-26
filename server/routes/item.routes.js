import express from "express";
import { adminAuth, userAuth } from "../utils/userAuth.js";
import {
  createItem,
  createManyOptions,
  createOption,
  deleteItem,
  getManyItems,
  getOneItem,
  getOneOption,
  getOptionByItem,
  updateItem,
} from "../controllers/item.js";

const router = express.Router();

router
  .post("/", userAuth, adminAuth, createItem)
  .get("/", getManyItems)
  .put("/:_id", userAuth, adminAuth, updateItem)
  .delete("/:_id", userAuth, adminAuth, deleteItem)
  .get("/:_id", getOneItem);

router
  .post("/option", userAuth, adminAuth, createOption)
  .get("/options/:_id", getOptionByItem)
  .get("/option/:_id", getOneOption)
  .post("/options", createManyOptions);
export default router;
