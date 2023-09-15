// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKOBhvwnnKKiU0ua0nlB4wT68NwpgwMHM",
  authDomain: "netflixgpt-a60d2.firebaseapp.com",
  projectId: "netflixgpt-a60d2",
  storageBucket: "netflixgpt-a60d2.appspot.com",
  messagingSenderId: "896162048767",
  appId: "1:896162048767:web:896fc9c10e913e152ebaca",
  measurementId: "G-QZZDJ811KJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
