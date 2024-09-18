const Attribute = require("../models/category/attributes.model");
const Subcategory = require("../models/category/subCategory.model");

const postAttribute = async (req, res) => {
  try {
    const { key, values, subcategoryId } = req.body;

    if (
      !key ||
      key.trim() === "" ||
      !values ||
      !Array.isArray(values) ||
      values.length === 0 ||
      !subcategoryId
    ) {
      return res.status(400).json({
        message: "Attribute key, values, and subcategory ID are required.",
      });
    }

    const subcategory = await Subcategory.findById(subcategoryId);
    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found." });
    }

    const newAttribute = await Attribute.create({
      key: key.trim(),
      values: values.map((value) => value.trim()),
      subcategory: subcategoryId,
    });

    subcategory.attributes.push(newAttribute._id);
    await subcategory.save();

    res
      .status(201)
      .json({ message: "Attribute created successfully", newAttribute });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//! Get all attributes with Subcategory and Category information

const getAllAttributesWithDetails = async (req, res) => {
  try {
    const attributes = await Attribute.find().populate({
      path: "subcategory",
      populate: {
        path: "category",
      },
    });

    if (!attributes || attributes.length === 0) {
      return res.status(404).json({ message: "No attributes found." });
    }

    res.status(200).json({ status: "OK", attributes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//! Get attribute by ID with Subcategory and Category information

const getAttributeWithDetails = async (req, res) => {
  try {
    const attribute = await Attribute.findById(req.params.id).populate({
      path: "subcategory",
      populate: {
        path: "category",
      },
    });

    if (!attribute) {
      return res.status(404).json({ message: "Attribute not found." });
    }

    res.status(200).json({ status: "OK", attribute });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//! Update an attribute

const updateAttribute = async (req, res) => {
  try {
    const { key, values } = req.body;

    if (!key || !values) {
      return res.status(400).json({ message: "Key and values are required." });
    }

    const updatedAttribute = await Attribute.findByIdAndUpdate(
      req.params.id,
      { key, values },
      { new: true }
    );

    if (!updatedAttribute) {
      return res.status(404).json({ message: "Attribute not found." });
    }

    res.status(200).json({ status: "OK", attribute: updatedAttribute });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//! Delete  attribute

const deleteAttribute = async (req, res) => {
  try {
    const deletedAttribute = await Attribute.findByIdAndDelete(req.params.id);

    if (!deletedAttribute) {
      return res.status(404).json({ message: "Attribute not found." });
    }

    res
      .status(200)
      .json({ status: "OK", message: "Attribute deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postAttribute,
  getAllAttributesWithDetails,
  getAttributeWithDetails,
  updateAttribute,
  deleteAttribute,
};
