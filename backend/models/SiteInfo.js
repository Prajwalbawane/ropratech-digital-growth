const mongoose = require("mongoose");

const siteInfoSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      default: "+91 99999 99999",
    },
    email: {
      type: String,
      default: "ropratech@gmail.com",
    },
    address: {
      type: String,
      default: "Gadchiroli, Maharashtra, India",
    },
    whatsapp: {
      type: String,
      default: "+91 99999 99999",
    },
    socialLinks: {
      facebook: { type: String, default: "" },
      instagram: { type: String, default: "" },
      twitter: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      youtube: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SiteInfo", siteInfoSchema);
