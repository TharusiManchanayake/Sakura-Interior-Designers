import { Router } from "express";
import { listReviews, setReviewStatus, deleteReview } from "./reviewStore.js";
import { listOrders, getOrder, updateOrder } from "./store.js";

const router = Router();

const FULFILLMENT_STATUSES = ["unfulfilled", "processing", "shipped", "delivered"];

/* ---------- Reviews ---------- */

// ?status=pending (default) | approved | rejected | all
router.get("/reviews", (req, res) => {
  const status = req.query.status === "all" ? undefined : req.query.status || "pending";
  const list = listReviews(status).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  res.json(list);
});

router.post("/reviews/:id/approve", (req, res) => {
  const updated = setReviewStatus(req.params.id, "approved");
  if (!updated) return res.status(404).json({ error: "Review not found." });
  res.json(updated);
});

router.post("/reviews/:id/reject", (req, res) => {
  const updated = setReviewStatus(req.params.id, "rejected");
  if (!updated) return res.status(404).json({ error: "Review not found." });
  res.json(updated);
});

router.delete("/reviews/:id", (req, res) => {
  const ok = deleteReview(req.params.id);
  if (!ok) return res.status(404).json({ error: "Review not found." });
  res.json({ ok: true });
});

/* ---------- Orders ---------- */

router.get("/orders", (req, res) => {
  res.json(listOrders());
});

router.get("/orders/:id", (req, res) => {
  const order = getOrder(req.params.id);
  if (!order) return res.status(404).json({ error: "Order not found." });
  res.json(order);
});

// Fulfillment (shipping progress) is separate from payment status, so this
// never touches whether an order is paid, cod, failed, etc.
router.post("/orders/:id/fulfillment", (req, res) => {
  const { fulfillmentStatus } = req.body ?? {};
  if (!FULFILLMENT_STATUSES.includes(fulfillmentStatus)) {
    return res.status(400).json({ error: "Invalid status.", allowed: FULFILLMENT_STATUSES });
  }
  const updated = updateOrder(req.params.id, { fulfillmentStatus });
  if (!updated) return res.status(404).json({ error: "Order not found." });
  res.json(updated);
});

export default router;