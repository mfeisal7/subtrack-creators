// src/services/subscriptions.js
import { db } from "../firebaseConfig";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

// ─── Subscriptions ────────────────────────────────────────────────────────────

export async function fetchUserSubscriptions(userId) {
  try {
    const ref = collection(db, "users", userId, "subscriptions");
    const snap = await getDocs(ref);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch {
    return [];
  }
}

export async function upsertUserSubscription(userId, sub) {
  const ref = doc(db, "users", userId, "subscriptions", sub.id);
  await setDoc(ref, sub, { merge: true });
  return sub;
}

export async function deleteUserSubscription(userId, id) {
  const ref = doc(db, "users", userId, "subscriptions", id);
  await deleteDoc(ref);
}

// ─── Premium status ───────────────────────────────────────────────────────────
// isPremium is set ONLY by Feisal via Firebase Console or activate-pro.js script.
// The client can READ it but never write it — enforced by Firestore security rules.

export async function fetchUserPremium(userId) {
  try {
    const ref = doc(db, "users", userId);
    const snap = await getDoc(ref);
    if (snap.exists() && snap.data().isPremium === true) return true;
  } catch {
    // Firestore unavailable — fall back to localStorage cache
  }
  return localStorage.getItem("subtrack_premium") === "true";
}

// NOTE: setUserPremiumFlag is kept for the PayPal URL redirect legacy path only.
// It writes to localStorage so the UI updates instantly while Firestore lags.
// Real Pro activation is done by Feisal via activate-pro.js or Firebase Console.
export async function setUserPremiumFlag(userId, value) {
  localStorage.setItem("subtrack_premium", value ? "true" : "false");
}

// ─── Pro activation request ────────────────────────────────────────────────────
// Called when a user submits their PayPal email after payment.
// Writes to Firestore pro_requests/{userId} — readable by Feisal in Firebase Console.

export async function submitProRequest(userId, userEmail, paypalEmail) {
  const ref = doc(db, "pro_requests", userId);
  await setDoc(ref, {
    userId,
    userEmail,
    paypalEmail,
    status: "pending",
    createdAt: serverTimestamp(),
  });
}
