// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChTjFZLoyRsO2zQJLcAZ9mcih1rS2q-oU",
  authDomain: "inventory-management-app-35332.firebaseapp.com",
  projectId: "inventory-management-app-35332",
  storageBucket: "inventory-management-app-35332.appspot.com",
  messagingSenderId: "85302681453",
  appId: "1:85302681453:web:4c82aabecb8b6b8b954464"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };