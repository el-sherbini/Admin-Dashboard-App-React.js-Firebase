import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboard-c00c0.firebaseapp.com",
  projectId: "dashboard-c00c0",
  storageBucket: "dashboard-c00c0.appspot.com",
  messagingSenderId: "480413218560",
  appId: "1:480413218560:web:eac251375e0ce4437765e5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
