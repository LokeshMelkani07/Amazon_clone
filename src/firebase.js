// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBskHCk8Wa40r3S5PbgbQGPz2C0KxcLgOA",
  authDomain: "clone-f3161.firebaseapp.com",
  projectId: "clone-f3161",
  storageBucket: "clone-f3161.appspot.com",
  messagingSenderId: "1090362983640",
  appId: "1:1090362983640:web:c5448107466182fd0703ad",
  measurementId: "G-KXR5MBE3EX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
