// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYcv6YmvenLuEuCEt3G_mDATOMhsqTNIo",
  authDomain: "shoppingmart-7eed2.firebaseapp.com",
  projectId: "shoppingmart-7eed2",
  storageBucket: "shoppingmart-7eed2.appspot.com",
  messagingSenderId: "305608230448",
  appId: "1:305608230448:web:061e1e6031c7134b03cff5",
  measurementId: "G-WNJVFKCVL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
const analytics = getAnalytics(app);