/** @format */

const express = require("express");
const {
  getCategories,
  postCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");

const router = express.Router();

router.get("/categories", getCategories);
router.get("/category/:id", getCategory);
router.patch("/updateCategory/:id", updateCategory);
router.delete("/deleteCategory/:id", deleteCategory);
router.post("/createcategory", postCategory);

module.exports = router;
