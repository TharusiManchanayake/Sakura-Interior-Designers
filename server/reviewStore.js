// Stores customer reviews in server/data/reviews.json.
//
// Unlike the order store, this reads the file every time instead of keeping a
// copy in memory. That way, when you approve a review from the command line
// (reviews-admin.js), the running server sees the change straight away and can't
// overwrite it later with an out-of-date copy.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "data");
const file = path.join(dir, "reviews.json");

fs.mkdirSync(dir, { recursive: true });

function load() {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return [];
  }
}

function save(list) {
  // Write to a temp file first so a crash can't leave a half-written file
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(list, null, 2));
  fs.renameSync(tmp, file);
}

export function addReview(review) {
  const list = load();
  list.push(review);
  save(list);
  return review;
}

// status: "pending" | "approved" | "rejected" (omit to get everything)
export function listReviews(status) {
  return load().filter((r) => !status || r.status === status);
}

export function setReviewStatus(id, status) {
  const list = load();
  const review = list.find((r) => r.id === id);
  if (!review) return null;
  review.status = status;
  review.updatedAt = new Date().toISOString();
  save(list);
  return review;
}

export function deleteReview(id) {
  const list = load();
  const next = list.filter((r) => r.id !== id);
  if (next.length === list.length) return false;
  save(next);
  return true;
}