/** @format */

const Attribute = require("../models/category/attributes.model");
const Category = require("../models/category/category.model");
const SubCategory = require("../models/category/subCategory.model");

//! Get Categories Controller

//! Get All Subcategories Controller

const getSubCategories = async (req, res) => {
  try {
    const subcategories = await SubCategory.find()
      .populate({
        path: "attributes",
        select: "key values",
      })
      .populate({
        path: "category",
        select: "name",
      })
      .select("name attributes");
    if (!subcategories) {
      return res.status(404).json({ message: "No Subcategories found." });
    }
    res.status(200).json({ status: "OK", subcategories });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//! Get Category id Controller

const getSubCategory = async (req, res) => {
  try {
    const subCategoryId = req.params.id;
    const subCategory = await Category.findById(subCategoryId)
      .populate({
        path: "attributes",
        select: "key values",
      })
      .populate({
        path: "category",
        select: "name",
      })
      .select("name attributes");
    if (!subCategory) {
      res.status(err.status || 500).json({ message: "Category not found." });
    }
    res.status(200).json({ status: "OK", subCategory });
  } catch (error) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

//! POST Subcategory Controller

const postSubCategory = async (req, res) => {
  try {
    const { subCategory, categoryId } = req.body;

    if (!subCategory || subCategory.trim() === "" || !categoryId) {
      return res
        .status(400)
        .json({ message: "Subcategory name and category ID are required." });
    }

    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }
    const newSubcategory = await SubCategory.create({
      name: subCategory.trim(),
      category: categoryId,
    });

    category.subcategories.push(newSubcategory._id);
    await category.save();

    res
      .status(201)
      .json({ message: "Subcategory created successfully", newSubcategory });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//! Update SubCategory Controller

const updateSubCategory = async (req, res) => {
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
    )
      .populate("category", "name")
      .populate("attributes", "key values")
      .select("name attributes");
    if (updatedCategory) {
      res.status(200).json({ message: "Category post updated", updatedCategory });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//! Delete SubCategory Controller

const deleteSubCategory = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedSubCategory = await SubCategory.findByIdAndDelete(id);
    if (!deletedSubCategory) {
      return res.status(404).json({ message: "SubCategory not found" });
    }

    await Attribute.deleteMany({ subcategory: id });

    res
      .status(200)
      .json({ message: "SubCategory and related attributes deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getSubCategories,
  getSubCategory,
  postSubCategory,
  updateSubCategory,
  deleteSubCategory,
};
