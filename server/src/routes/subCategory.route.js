/** @format */

const express = require("express");
const {
  getSubCategories,
  getSubCategory,
  postSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/subCategory.controller");

const router = express.Router();

router.get("/subCategories", getSubCategories);
router.get("/subCategoriesId/:id", getSubCategory);
router.patch("/updateSubCategory/:id", updateSubCategory);
router.delete("/deleteSubCategory/:id", deleteSubCategory);
router.post("/createSubCategory", postSubCategory);

module.exports = router;
