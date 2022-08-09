// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC1bkycOCjCupGQcaHH23mviUqxDShT5E",
  authDomain: "car-service-71609.firebaseapp.com",
  projectId: "car-service-71609",
  storageBucket: "car-service-71609.appspot.com",
  messagingSenderId: "471161491167",
  appId: "1:471161491167:web:ec1fa54f7408c544e3a36a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;