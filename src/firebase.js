import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboard-c2b94.firebaseapp.com",
  projectId: "dashboard-c2b94",
  storageBucket: "dashboard-c2b94.appspot.com",
  messagingSenderId: "298540050151",
  appId: "1:298540050151:web:919dbbf5d67b92a09ea442",
  measurementId: "G-13JJKS3R0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);