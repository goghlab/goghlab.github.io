// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCG5pVt5fXPgHUeqpsxbpTt702cg6leJKU",
    authDomain: "ei-website-103a4.firebaseapp.com",
    databaseURL: "https://ei-website-103a4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ei-website-103a4",
    storageBucket: "ei-website-103a4.appspot.com",
    messagingSenderId: "609909198676",
    appId: "1:609909198676:web:88fe2d7d886e6eb17202c1",
    measurementId: "G-HZQ5QYRXQX"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
