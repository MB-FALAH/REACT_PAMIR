import express from "express";
import {
  createReview,
  getReviews,
  deleteReview,
  clearReviews, // ✅ FIXED
} from "../controllers/review.controller.js";

const router = express.Router();

// CREATE
router.post("/create-review", createReview);

// GET
router.get("/get-review", getReviews);

// DELETE ONE
router.delete("/delete-review/:id", deleteReview);

// 🔥 CLEAR ALL REVIEWS (FIXED)
router.delete("/clear-reviews", clearReviews);

export default router;