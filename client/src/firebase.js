// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-657e0.firebaseapp.com",
  projectId: "mern-estate-657e0",
  storageBucket: "mern-estate-657e0.appspot.com",
  messagingSenderId: "341638388143",
  appId: "1:341638388143:web:5e355c8297cfdf949f375a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
