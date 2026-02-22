const express = require("express");
const router = express.Router();
const {
  getReviews,
  getAllReviewsAdmin,
  createReview,
  approveReview,
  deleteReview,
} = require("../controllers/reviewController");
const protect = require("../middleware/auth");

router.get("/", getReviews);
router.get("/admin", protect, getAllReviewsAdmin);
router.post("/", createReview);
router.put("/:id/approve", protect, approveReview);
router.delete("/:id", protect, deleteReview);

module.exports = router;
