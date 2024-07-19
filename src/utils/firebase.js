// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiVCIAMF1YtrazOi19ySI_ZbmlHNGTcLo",
  authDomain: "netflixgpt-74613.firebaseapp.com",
  projectId: "netflixgpt-74613",
  storageBucket: "netflixgpt-74613.appspot.com",
  messagingSenderId: "749246065161",
  appId: "1:749246065161:web:fc028551ed8587b50626d8",
  measurementId: "G-X2TDM199QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();