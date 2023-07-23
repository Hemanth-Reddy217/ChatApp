// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore" ;


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjJPRbDFNul3NRG97aQkZFGK81DrZRl98",
  authDomain: "react-chat-ad1e0.firebaseapp.com",
  projectId: "react-chat-ad1e0",
  storageBucket: "react-chat-ad1e0.appspot.com",
  messagingSenderId: "296441151630",
  appId: "1:296441151630:web:3a3975fd9ccea9dc4f09df",
  measurementId: "G-TG2MLS6GTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
