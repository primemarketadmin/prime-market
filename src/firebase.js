// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase config (use exactly what Firebase gave you)
const firebaseConfig = {
  //apiKey: "AIzaSyDgZedPvEDhsUncRu7EitGkT3ISov4sTsU",
  //authDomain: "prime-market-mail.firebaseapp.com",
  //projectId: "prime-market-mail",
  //storageBucket: "prime-market-mail.firebasestorage.app",
  //messagingSenderId: "953809119384",
  //appId: "1:953809119384:web:aff6bda92dea5a26fec8ed",
  //measurementId: "G-EXG2MBDL7Z",

  apiKey: "AIzaSyD1Q6CrRV18dwYUENKJghawPw0-b3_up1I",
  authDomain: "prime-market-mail-303d5.firebaseapp.com",
  projectId: "prime-market-mail-303d5",
  storageBucket: "prime-market-mail-303d5.firebasestorage.app",
  messagingSenderId: "181922298248",
  appId: "1:181922298248:web:4aa2bb866ff7140978623d",
  measurementId: "G-Y6FLC6VPJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Firestore database
export const db = getFirestore(app);
