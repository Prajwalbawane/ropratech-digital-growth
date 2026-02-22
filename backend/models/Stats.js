const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema(
  {
    happyClients: {
      type: Number,
      default: 50,
    },
    projectsDelivered: {
      type: Number,
      default: 80,
    },
    yearsExperience: {
      type: Number,
      default: 3,
    },
    activeServices: {
      type: Number,
      default: 7,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stats", statsSchema);
