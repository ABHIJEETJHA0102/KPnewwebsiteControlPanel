const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  short_desc: {
    type: String,
  },
  images : [String]
});

module.exports = mongoose.model("Blog", BlogSchema);
