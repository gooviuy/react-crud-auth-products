// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkpuf2fAop5mmui3XZ85MFFcR6Whc1oLE",
  authDomain: "react-auth-4079d.firebaseapp.com",
  projectId: "react-auth-4079d",
  storageBucket: "react-auth-4079d.appspot.com",
  messagingSenderId: "1088107761863",
  appId: "1:1088107761863:web:a54c1a85c321d058d12ee2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
