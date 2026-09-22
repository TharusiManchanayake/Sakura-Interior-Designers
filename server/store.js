// Very small file-based order store (server/data/orders.json).
// Fine for development and a small shop. For a busy shop, swap these three
// functions for a real database (PostgreSQL, MongoDB, etc.); nothing else changes.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "data");
const file = path.join(dir, "orders.json");

fs.mkdirSync(dir, { recursive: true });

let orders = {};
if (fs.existsSync(file)) {
  try {
    orders = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    console.error("Could not read data/orders.json, starting with an empty store.");
  }
}

function save() {
  // Write to a temp file first so a crash can't leave a half-written orders file
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(orders, null, 2));
  fs.renameSync(tmp, file);
}

export function createOrder(order) {
  orders[order.id] = order;
  save();
  return order;
}

export function getOrder(id) {
  return Object.hasOwn(orders, id) ? orders[id] : null;
}

export function updateOrder(id, patch) {
  if (!Object.hasOwn(orders, id)) return null;
  orders[id] = { ...orders[id], ...patch, updatedAt: new Date().toISOString() };
  save();
  return orders[id];
}