// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "pasta-shop-f0b05.firebaseapp.com",
  projectId: "pasta-shop-f0b05",
  storageBucket: "pasta-shop-f0b05.appspot.com",
  messagingSenderId: "736084386664",
  appId: "1:736084386664:web:7ba84dde2e0354a22aacdd",
  measurementId: "G-HSSDFCTW66",
};

// Initialize Firebase
//  const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
