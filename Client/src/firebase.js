
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0geBsRJCSSYeKEqWMJo31KKN0MFcN0yQ",
  authDomain: "chat2-5dc3a.firebaseapp.com",
  projectId: "chat2-5dc3a",
  storageBucket: "chat2-5dc3a.appspot.com",
  messagingSenderId: "393199106747",
  appId: "1:393199106747:web:a440a659b93fd8f577879e"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();