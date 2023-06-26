const mongoose = require("mongoose");

const dressSchema = mongoose.Schema(
  {
    name: { type: String, require },
    sizes: [],
    prices: [],
    category: { type: String, require },
    img: { type: String, require },
    description: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const dressModel = mongoose.model("dresses", dressSchema);

module.exports = dressModel;
