import { Router } from "express";
import crypto from "node:crypto";
import { addReview, listReviews } from "./reviewStore.js";

const router = Router();

// Keep in sync with the categories in client/src/data/reviewsData.js
const CATEGORIES = ["Home Design", "Family Home", "Couple's Home", "Home Office", "Nursery"];

// Simple spam guard: at most 3 submissions per visitor per hour
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const recent = new Map(); // ip -> list of timestamps

function rateLimited(ip) {
  const now = Date.now();
  const list = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (list.length >= MAX_PER_WINDOW) {
    recent.set(ip, list);
    return true;
  }
  list.push(now);
  recent.set(ip, list);
  return false;
}

const clean = (value, max) => (typeof value === "string" ? value.trim().slice(0, max) : "");

// Only approved reviews, and only the fields the page needs
router.get("/", (req, res) => {
  const approved = listReviews("approved")
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .map(({ id, name, category, headline, quote, createdAt }) => ({
      id,
      name,
      category,
      headline,
      quote,
      createdAt,
    }));
  res.json(approved);
});

// A visitor submits a review. It waits as "pending" until you approve it.
router.post("/", (req, res) => {
  const body = req.body ?? {};

  // Hidden "honeypot" field: real people never see it, bots often fill it in.
  // Pretend it worked so the bot doesn't try again.
  if (body.website) return res.status(201).json({ ok: true });

  const review = {
    name: clean(body.name, 60),
    category: clean(body.category, 40),
    headline: clean(body.headline, 100),
    quote: clean(body.quote, 1000),
  };

  const fields = {};
  if (review.name.length < 2) fields.name = "Please enter your name.";
  if (!CATEGORIES.includes(review.category)) fields.category = "Please choose a category.";
  if (review.headline.length < 3) fields.headline = "Please add a short title for your review.";
  if (review.quote.length < 30) fields.quote = "Please write at least a couple of sentences (30+ characters).";

  if (Object.keys(fields).length > 0) {
    return res.status(400).json({ error: "Please check the highlighted fields.", fields });
  }

  if (rateLimited(req.ip)) {
    return res.status(429).json({
      error: "You've sent a few reviews already. Please try again later.",
    });
  }

  addReview({
    id: `RV-${crypto.randomBytes(3).toString("hex").toUpperCase()}`,
    ...review,
    status: "pending",
    createdAt: new Date().toISOString(),
  });

  res.status(201).json({ ok: true });
});

export default router;