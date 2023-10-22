// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
require('dotenv').config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_KEY}`,
  authDomain: "tech-bond-user.firebaseapp.com",
  projectId: "tech-bond-user",
  storageBucket: "tech-bond-user.appspot.com",
  messagingSenderId: "998214575836",
  appId: "1:998214575836:web:36723d798e15acfca17619"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app

