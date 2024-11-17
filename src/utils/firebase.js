// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvcc8qGghqxJXRm0WzSGp-ZHEuCcSNbGo",
  authDomain: "netflixgpt-494a9.firebaseapp.com",
  projectId: "netflixgpt-494a9",
  storageBucket: "netflixgpt-494a9.firebasestorage.app",
  messagingSenderId: "60090865488",
  appId: "1:60090865488:web:09ec943bebe277dc1a3e55",
  measurementId: "G-1W70DYM8WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
export const auth = getAuth();