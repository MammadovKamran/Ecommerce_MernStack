/** @format */

const mongoose = require("mongoose");

const CategoryShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    icon: {
      type: String,
      required: true,
      trim: true,
    },
    subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", CategoryShema);
