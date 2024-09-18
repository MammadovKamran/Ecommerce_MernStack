const mongoose = require("mongoose");

const SubcategorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  attributes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attribute" }],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

module.exports = mongoose.model("SubCategory", SubcategorySchema);
