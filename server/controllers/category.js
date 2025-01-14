import Category from "../models/category.module.js";
import axios from "axios";

//////////!   CREATE CATEGORY   !//////////

export const createCategory = async (req, res) => {
  if (!req.body.name) return res.status(404).json("category name missing");
  if (!req.body.image) return res.status(404).json("category image missing");

  try {
    const category = await Category.create(req.body);

    res.status(201).json(category);
  } catch (error) {
    if (error.errorResponse.code === 11000)
      return res.status(406).json("category name already exist");
    res.status(401).json(error);
  }
};

//////////!   GET CATEGORY   !//////////

export const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params._id);
    res.status(202).json(category);
  } catch (error) {
    res.status(401).json(error);
  }
};

//////////!   GET CATEGORIES   !//////////

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().select("name");
    res.status(202).json(categories);
  } catch (error) {
    res.status(401).json(error);
  }
};

//////////!   UPDATE CATEGORY   !//////////

export const updateCategory = async (req, res) => {
  if (!req.body.name) return res.status(404).json("category name missing");
  if (!req.body.image) return res.status(404).json("category image missing");
  if (!req.params._id) return res.status(404).json("category id missing");

  try {
    const category = await Category.findByIdAndUpdate(
      req.params._id,
      { name: req.body.name },
      { new: true }
    );
    res.status(202).json(category);
  } catch (error) {
    res.status(401).json(error);
  }
};

//////////!   DELETE CATEGORY   !//////////

export const deleteCategory = async (req, res) => {
  if (!req.params._id) return res.status(404).json("category id missing");

  try {
    await Category.findByIdAndDelete(req.params._id);
    return res
      .status(202)
      .json({ message: "category deleted", id: req.params._id });
  } catch (error) {
    res.status(402).json(error);
  }
};
