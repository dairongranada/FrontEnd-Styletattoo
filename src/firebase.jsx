// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZB-tDtScCe9L9Jb7-5SFxbLs7v0LJalU" /* Todo esto es para Conectarme a firebase */,
  authDomain: "styletatto-57730.firebaseapp.com",
  projectId: "styletatto-57730",
  storageBucket: "styletatto-57730.appspot.com",
  messagingSenderId: "669626090297",
  appId: "1:669626090297:web:b26ce01b993a7fa3c19ee8",
  measurementId: "G-5G7STC4JLH"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth =getAuth(app)
