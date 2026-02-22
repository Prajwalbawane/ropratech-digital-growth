const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
      maxlength: 200,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: 2000,
    },
    technologies: {
      type: [String],
      default: [],
    },
    image: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      trim: true,
      default: "Website",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
