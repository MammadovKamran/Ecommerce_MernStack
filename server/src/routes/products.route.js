const express = require("express");
const {
  postProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  getProducts,
} = require("../controllers/products.controller");

const router = express.Router();

// router.get("/categories", getCategories);
router.post("/createProduct", postProduct);
router.post("/updateProduct/:id", updateProduct);
router.post("/products", getProducts);
router.post("/product/:id", getProduct);
router.post("/deleteProduct", deleteProduct);

module.exports = router;
