const mongoose = require("mongoose");

const AttributeSchema = new mongoose.Schema({
  key: { type: String, required: true, trim: true },
  values: [{ type: String, required: true, trim: true }],
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
    required: true,
  },
});

module.exports = mongoose.model("Attribute", AttributeSchema);
