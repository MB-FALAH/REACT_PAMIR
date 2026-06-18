import express from "express";
import {
  subscribeNewsletter,
  getSubscribers,
  clearSubscribers,
} from "../controllers/newsletter.controller.js";

const router = express.Router();

router.post("/subscribe", subscribeNewsletter);

router.get("/subscribers", getSubscribers);

router.delete(
  "/clear-subscribers",
  clearSubscribers
);

export default router;