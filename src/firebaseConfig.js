// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo1uK_K0hMDu5vc-6KKfjIBazPar0lYoo",
  authDomain: "subtrack-creators.firebaseapp.com",
  projectId: "subtrack-creators",
  storageBucket: "subtrack-creators.firebasestorage.app",
  messagingSenderId: "37764462328",
  appId: "1:37764462328:web:48f8a3c6134028f1ae2d0d",
  measurementId: "G-4P7F34PLP1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
