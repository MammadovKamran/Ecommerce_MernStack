const mongoose = require("mongoose");

const ProductSchema =  mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcategory",
    required: true,
  },
  attributes: [
    {
      attribute: { type: mongoose.Schema.Types.ObjectId, ref: "Attribute" },
      value: { type: String },
    },
  ],
});

module.exports = mongoose.model("Product", ProductSchema);
