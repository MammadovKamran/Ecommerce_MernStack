/** @format */

const express = require("express");
const {
  postAttribute,
  getAllAttributesWithDetails,
  getAttributeWithDetails,
  updateAttribute,
  deleteAttribute,
} = require("../controllers/Attribute.controller");

const router = express.Router();

//! User
router.post("/category/subcategory/createAttribute", postAttribute);
router.get(
  "/category/subcategory/getAllAttributesWithDetails",
  getAllAttributesWithDetails
);
router.get(
  "/category/subcategory/getAttributeWithDetails/:id",
  getAttributeWithDetails
);
router.patch("/category/subcategory/updateAttribute/:id", updateAttribute);
router.post("/category/subcategory/deleteAttribute/:id", deleteAttribute);

module.exports = router;
