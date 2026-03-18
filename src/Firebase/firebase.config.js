// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGLMUDXgCpVEYoWQ8r2wi5TrlucKa2xQQ",
  authDomain: "smart-deals-65f69.firebaseapp.com",
  projectId: "smart-deals-65f69",
  storageBucket: "smart-deals-65f69.firebasestorage.app",
  messagingSenderId: "587333334165",
  appId: "1:587333334165:web:2d07bf5f87060ebd31d79c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);