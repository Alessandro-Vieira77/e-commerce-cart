// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "shopping-cart-90ef7.firebaseapp.com",
  projectId: "shopping-cart-90ef7",
  storageBucket: "shopping-cart-90ef7.firebasestorage.app",
  messagingSenderId: "829480634908",
  appId: "1:829480634908:web:22eab18c50b1ea450eadd9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
