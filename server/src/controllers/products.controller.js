const Attribute = require("../models/category/attributes.model");
const Subcategory = require("../models/category/subCategory.model");
const Products = require("../models/products.model");

//! Post Product Controller

const postProduct = async (req, res) => {
  try {
    const { name, price, subcategoryId, attributes } = req.body;

    const subcategory = await Subcategory.findById(subcategoryId);
    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found." });
    }

    const productAttributes = await Promise.all(
      attributes.map(async (attr) => {
        const attribute = await Attribute.findById(attr.attributeId);
        if (!attribute) {
          throw new Error(`Attribute with id ${attr.attributeId} not found.`);
        }
        if (!attribute.values.includes(attr.value)) {
          throw new Error(`Invalid value for attribute ${attribute.key}.`);
        }
        return { attribute: attr.attributeId, value: attr.value };
      })
    );

    const newProduct = await Products.create({
      name,
      price,
      subcategory: subcategoryId,
      attributes: productAttributes,
    });

    res.status(201).json({ status: "OK", product: newProduct });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//! Get Products Controller
const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("subcategory")
      .populate("attributes.attribute");
    res.status(200).json({ status: "OK", products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//! Get Product by ID Controller

const getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId)
      .populate("subcategory")
      .populate("attributes.attribute");
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json({ status: "OK", product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//! Update Product Controller

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, subcategoryId, attributes, price } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    const subcategory = await Subcategory.findById(subcategoryId);
    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found." });
    }

    const productAttributes = await Promise.all(
      attributes.map(async (attr) => {
        const attribute = await Attribute.findById(attr.attributeId);
        if (!attribute) {
          throw new Error(`Attribute with id ${attr.attributeId} not found.`);
        }
        if (!attribute.values.includes(attr.value)) {
          throw new Error(`Invalid value for attribute ${attribute.key}.`);
        }
        return { attribute: attr.attributeId, value: attr.value };
      })
    );

    product.name = name || product.name;
    product.price = price || product.price;
    product.subcategory = subcategoryId || product.subcategory;
    product.attributes = productAttributes || product.attributes;

    await product.save();

    res.status(200).json({ status: "OK", product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//! Delete Product Controller

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  postProduct,
  deleteProduct,
  updateProduct,
  getProducts,
  getProduct,
};
