// src/services/subscriptions.js
// Local-only versions so the app works without Firestore billing.

const LOCAL_KEY = "subtrack_local_subscriptions_v1";
const LOCAL_PREMIUM_KEY = "subtrack_local_premium_v1";

export async function fetchUserSubscriptions(userId) {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function saveUserSubscriptions(userId, subs) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(subs));
  } catch {}
}

export async function fetchUserPremium(userId) {
  return localStorage.getItem(LOCAL_PREMIUM_KEY) === "true";
}

export async function setUserPremiumFlag(userId, value) {
  localStorage.setItem(LOCAL_PREMIUM_KEY, value ? "true" : "false");
}

export async function upsertUserSubscription(userId, newSub) {
  const list = await fetchUserSubscriptions(userId);
  const enriched = { ...newSub, id: Date.now().toString() };
  list.push(enriched);
  await saveUserSubscriptions(userId, list);
  return enriched;
}

export async function deleteUserSubscription(userId, id) {
  const list = await fetchUserSubscriptions(userId);
  const cleaned = list.filter((s) => s.id !== id);
  await saveUserSubscriptions(userId, cleaned);
  return cleaned;
}
