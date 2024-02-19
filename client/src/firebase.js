// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-17fca.firebaseapp.com",
  projectId: "real-estate-17fca",
  storageBucket: "real-estate-17fca.appspot.com",
  messagingSenderId: "1035095145353",
  appId: "1:1035095145353:web:fdbabdf17ad9190460bf58"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);