// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import per l'autenticazione
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANNxIMPYg1SqSYxYgvIE15uUopG0AaKQo",
  authDomain: "becky-ec31c.firebaseapp.com",
  projectId: "becky-ec31c",
  storageBucket: "becky-ec31c.firebasestorage.app",
  messagingSenderId: "717358339542",
  appId: "1:717358339542:web:dfd25e6116a40dfccac077",
  measurementId: "G-LMCD61Z2V8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Configura l'autenticazione e la esporta
export const auth = getAuth(app);
