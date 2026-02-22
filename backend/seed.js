require("dotenv").config();
const mongoose = require("mongoose");
const Admin = require("./models/Admin");
const Stats = require("./models/Stats");
const SiteInfo = require("./models/SiteInfo");

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Seed admin
    const existingAdmin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    if (!existingAdmin) {
      await Admin.create({
        name: "RoPratech Admin",
        email: process.env.ADMIN_EMAIL || "admin@ropratech.com",
        password: process.env.ADMIN_PASSWORD || "Admin@123",
      });
      console.log("✅ Admin user created");
    } else {
      console.log("ℹ️  Admin already exists");
    }

    // Seed stats
    const existingStats = await Stats.findOne();
    if (!existingStats) {
      await Stats.create({
        happyClients: 50,
        projectsDelivered: 80,
        yearsExperience: 3,
        activeServices: 7,
      });
      console.log("✅ Stats seeded");
    }

    // Seed site info
    const existingInfo = await SiteInfo.findOne();
    if (!existingInfo) {
      await SiteInfo.create({});
      console.log("✅ Site info seeded");
    }

    console.log("🎉 Seeding complete!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seed();
