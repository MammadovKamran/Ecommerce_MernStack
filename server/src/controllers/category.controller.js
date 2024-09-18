/** @format */

const Category = require("../models/category/category.model");
const SubCategory = require("../models/category/subCategory.model");
const Attribute = require("../models/category/attributes.model");

//! Get All Categories Controller
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate({
      path: "subcategories",
      select: "name ",
      // populate: { path: "attributes" },
    });

    if (!categories) {
      return res.status(404).json({ message: "No categories found." });
    }

    res.status(200).json({ status: "OK", categories });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//! Get Category id Controller

const getCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId).populate({
      path: "subcategories",
      select: "name",
      // populate: { path: "attributes" },
    });
    if (!category) {
      res.status(404).json({ message: "Category not found." });
    }
    res.status(200).json({ status: "OK", category });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};



//! Post Categories Controller

const postCategory = async (req, res) => {
  try {
    const { category } = req.body;
    const trimmedCategory = category ? category.trim() : "";

    if (!trimmedCategory || trimmedCategory.length === 0) {
      return res.status(400).json({ message: "Category is required." });
    }

    const foundCategory = await Category.findOne({ name: trimmedCategory });

    if (foundCategory) {
      return res.status(400).json({ message: "Category already exists." });
    }
    const newCategory = await Category.create({ name: trimmedCategory });

    res.status(201).json({ status: "OK", newCategory });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

//! Update Category Controller

const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const { category } = req.body;
    const trimmedCategory = category ? category.trim() : "";

    if (!trimmedCategory || trimmedCategory.length === 0) {
      return res.status(400).json({ message: "Category is required." });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      { _id: id },
      { name: trimmedCategory },
      { new: true }
    );
    if (updatedCategory) {
      res.status(200).json({ message: "Category updated", updatedCategory });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//! Delete Category Controller

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    await SubCategory.deleteMany({ category: id });
    await Attribute.deleteMany({ category: id });

    res
      .status(200)
      .json({ message: "Category and related data deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCategories,
  getCategory,
  postCategory,
  updateCategory,
  deleteCategory,
};
