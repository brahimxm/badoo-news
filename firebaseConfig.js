// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHN3CebHCEH87IhGB9XmwTfoJj6wRdgno",
  authDomain: "baddo-news.firebaseapp.com",
  projectId: "baddo-news",
  storageBucket: "baddo-news.firebasestorage.app",
  messagingSenderId: "864887966180",
  appId: "1:864887966180:web:72738948be2e3fad351ff1",
  measurementId: "G-DQEYDZS3TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);