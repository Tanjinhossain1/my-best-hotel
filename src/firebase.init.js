// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAakOuUNbQhLqn9EJYoeI0M3sWmSHN7qfI",
  authDomain: "my-best-hotel.firebaseapp.com",
  projectId: "my-best-hotel",
  storageBucket: "my-best-hotel.appspot.com",
  messagingSenderId: "316606895588",
  appId: "1:316606895588:web:7cfc39c14ec8412da0a3f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;