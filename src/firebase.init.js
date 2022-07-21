 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq5ZUpQlIDHGTu3btO7mRGfumS77-VTuE",
  authDomain: "genius-cart-8100e.firebaseapp.com",
  projectId: "genius-cart-8100e",
  storageBucket: "genius-cart-8100e.appspot.com",
  messagingSenderId: "973507620235",
  appId: "1:973507620235:web:36e1fbd6cea810d319938e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = app;
export default auth;