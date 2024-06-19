// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChmKBpPnZNWWVlcfvmaCPNPraW3DPQ7YM",
  authDomain: "netflixgpt-88e9a.firebaseapp.com",
  projectId: "netflixgpt-88e9a",
  storageBucket: "netflixgpt-88e9a.appspot.com",
  messagingSenderId: "737025879808",
  appId: "1:737025879808:web:6a3964137b069736860de5",
  measurementId: "G-B5TE2R0C14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
