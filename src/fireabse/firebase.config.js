// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc6y6O5CCym-r_mGWaJ7GQF5oQoHkU21o",
  authDomain: "crowd-funding-936c0.firebaseapp.com",
  projectId: "crowd-funding-936c0",
  storageBucket: "crowd-funding-936c0.firebasestorage.app",
  messagingSenderId: "970703990271",
  appId: "1:970703990271:web:a61e31dd6977bf98a14bca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default (auth);