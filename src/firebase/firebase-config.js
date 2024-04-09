// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD21d8k2HBiLMTF7LEAzRTXuGPaQD4UEfw",
  authDomain: "invoice-app-36a7b.firebaseapp.com",
  projectId: "invoice-app-36a7b",
  storageBucket: "invoice-app-36a7b.appspot.com",
  messagingSenderId: "396173091617",
  appId: "1:396173091617:web:0a98d71048e963ffd61460",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
