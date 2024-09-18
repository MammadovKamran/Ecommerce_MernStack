/** @format */

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./src/database/db.js");
const AuthRoute = require("./src/routes/auth.route.js");
const RoleRoute = require("./src/routes/role.route.js");
const CategoryRoute = require("./src/routes/category.route.js");
const SubCategoryRoute = require("./src/routes/subCategory.route.js");
const AttributeRoute = require("./src/routes/attribute.route.js");
const ProductsRoute = require("./src/routes/products.route.js");

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());

app.use("/uploads", express.static(path.join(__dirname, "src", "uploads")));

//!Router
app.use("/api", AuthRoute);
app.use("/api", RoleRoute);
app.use("/api", CategoryRoute);
app.use("/api", SubCategoryRoute);
app.use("/api", AttributeRoute);
app.use("/api", ProductsRoute);

//!Database
connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port:5000`);
});
