// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Hj_Ad_Hbxq20mQELtmDS56gK48pXn0U",
  authDomain: "md2-reactjs.firebaseapp.com",
  projectId: "md2-reactjs",
  storageBucket: "md2-reactjs.appspot.com",
  messagingSenderId: "815157158681",
  appId: "1:815157158681:web:dd65cfb0783b262ba55b88",
  measurementId: "G-LRGQMELC8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);