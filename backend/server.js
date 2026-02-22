require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

// Connect to MongoDB
connectDB();

const app = express();

// --------------- Security Middleware ---------------
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { success: false, message: "Too many requests. Try again later." },
});
app.use("/api/", limiter);

// Stricter limiter for auth
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: "Too many login attempts. Try again later." },
});
app.use("/api/auth/login", authLimiter);

// Body parser
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Static files (uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// --------------- API Routes ---------------
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/stats", require("./routes/statsRoutes"));
app.use("/api/site-info", require("./routes/siteInfoRoutes"));

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, message: "RoPratech API is running 🚀" });
});

// --------------- Error Handler ---------------
app.use(errorHandler);

// --------------- Start Server ---------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 RoPratech API running on port ${PORT} (${process.env.NODE_ENV || "development"})`);
});
