const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema({
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
  githubLink: {
    type: String,
  },
  buttonText: {
    type: String,
  },
});

ProjectSchema.path("githubLink").validate((val) => {
  urlRegex =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlRegex.test(val);
}, "Invalid URL.");

module.exports = mongoose.model("Project", ProjectSchema);
