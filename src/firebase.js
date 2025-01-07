// src/firebase.js
import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB6W7fwF0Pj1nQoo2DpeSeKtJXllxgvNJw",
    authDomain: "salon-25d98.firebaseapp.com",
    projectId: "salon-25d98",
    storageBucket: "salon-25d98.firebasestorage.app",
    messagingSenderId: "762988208960",
    appId: "1:762988208960:web:9eb8e76f65e0215e71d0a5"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebaseApp.firestore();

export default db;
