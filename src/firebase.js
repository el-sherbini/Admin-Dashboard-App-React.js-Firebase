import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "dashboard-c00c0.firebaseapp.com",
  projectId: "dashboard-c00c0",
  storageBucket: "dashboard-c00c0.appspot.com",
  messagingSenderId: "480413218560",
  appId: "1:480413218560:web:eac251375e0ce4437765e5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
