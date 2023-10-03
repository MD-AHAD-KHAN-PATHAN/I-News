// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi9EgLEDqUoc1-eoGHrrV8dnDXMqL1AOc",
  authDomain: "dragon-news-fcbd8.firebaseapp.com",
  projectId: "dragon-news-fcbd8",
  storageBucket: "dragon-news-fcbd8.appspot.com",
  messagingSenderId: "292423983975",
  appId: "1:292423983975:web:b676b2ff3c42a16ed885c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;