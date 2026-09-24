// A single shared admin password (from server/.env), not full user accounts.
// Good enough for one owner; revisit if more than one person needs access.

import crypto from "node:crypto";

const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours of inactivity
const sessions = new Map(); // token -> expiresAt

// Login attempts: at most 5 per 15 minutes per IP, so a password can't be brute-forced
const ATTEMPT_WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const attempts = new Map(); // ip -> timestamps[]

function tooManyAttempts(ip) {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < ATTEMPT_WINDOW_MS);
  attempts.set(ip, recent);
  return recent.length >= MAX_ATTEMPTS;
}

function recordAttempt(ip) {
  const list = attempts.get(ip) ?? [];
  list.push(Date.now());
  attempts.set(ip, list);
}

function safeEqual(a, b) {
  const A = Buffer.from(a);
  const B = Buffer.from(b);
  return A.length === B.length && crypto.timingSafeEqual(A, B);
}

export function login(req, res) {
  const configured = process.env.ADMIN_PASSWORD;
  if (!configured) {
    return res.status(503).json({
      error: "Admin login isn't set up yet. Add ADMIN_PASSWORD to server/.env and restart the server.",
    });
  }

  if (tooManyAttempts(req.ip)) {
    return res.status(429).json({ error: "Too many attempts. Please wait a few minutes and try again." });
  }

  const given = typeof req.body?.password === "string" ? req.body.password : "";
  if (!given || !safeEqual(given, configured)) {
    recordAttempt(req.ip);
    return res.status(401).json({ error: "Incorrect password." });
  }

  const token = crypto.randomBytes(24).toString("hex");
  sessions.set(token, Date.now() + SESSION_TTL_MS);
  res.json({ token });
}

export function requireAdmin(req, res, next) {
  const header = req.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  const expiresAt = token ? sessions.get(token) : null;

  if (!expiresAt || expiresAt < Date.now()) {
    if (token) sessions.delete(token);
    return res.status(401).json({ error: "Please log in again." });
  }

  sessions.set(token, Date.now() + SESSION_TTL_MS); // stay logged in while active
  next();
}

export function logout(req, res) {
  const header = req.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (token) sessions.delete(token);
  res.json({ ok: true });
}