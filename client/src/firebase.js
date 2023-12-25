// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b291a.firebaseapp.com",
  projectId: "mern-estate-b291a",
  storageBucket: "mern-estate-b291a.appspot.com",
  messagingSenderId: "1028235100856",
  appId: "1:1028235100856:web:10ec9e54cc68ebaa692a4d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);