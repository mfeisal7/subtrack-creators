/**
 * SubTrack Pro Activation Script
 * ================================
 * Run this to manually activate a user's Pro account after verifying their PayPal payment.
 *
 * SETUP (one-time):
 * 1. Go to Firebase Console → Project Settings → Service accounts
 * 2. Click "Generate new private key" → download the JSON file
 * 3. Save it as scripts/serviceAccountKey.json (never commit this file!)
 * 4. Run: npm install firebase-admin (in the subtrack-creators folder)
 *
 * USAGE:
 *   node scripts/activate-pro.js <userId>
 *
 * HOW TO FIND THE USER ID:
 *   Firebase Console → Authentication → Users → find by email → copy UID
 *
 * EXAMPLE:
 *   node scripts/activate-pro.js abc123xyz456
 */

import admin from "firebase-admin";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load service account
const serviceAccount = JSON.parse(
  readFileSync(join(__dirname, "serviceAccountKey.json"), "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const userId = process.argv[2];

if (!userId) {
  console.error("❌ Usage: node scripts/activate-pro.js <userId>");
  console.error("   Find the userId in Firebase Console → Authentication → Users");
  process.exit(1);
}

async function activatePro(uid) {
  console.log(`\n🔍 Activating Pro for user: ${uid}`);

  // Mark as premium in Firestore
  await db.collection("users").doc(uid).set(
    {
      isPremium: true,
      activatedAt: admin.firestore.FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  // Update the pro_request status if one exists
  const reqRef = db.collection("pro_requests").doc(uid);
  const reqSnap = await reqRef.get();
  if (reqSnap.exists) {
    await reqRef.update({ status: "activated", activatedAt: admin.firestore.FieldValue.serverTimestamp() });
    const data = reqSnap.data();
    console.log(`   📧 PayPal email on file: ${data.paypalEmail}`);
    console.log(`   👤 Account email: ${data.userEmail}`);
  }

  console.log(`\n✅ Done! User ${uid} is now Pro.`);
  console.log(`   They'll see it next time they open the app.\n`);
  process.exit(0);
}

activatePro(userId).catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
