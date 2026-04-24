import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQTbmbZQLpCReIUpj5Au55GRH0WC2Qeyk",
  authDomain: "cafe-del-valle.firebaseapp.com",
  projectId: "cafe-del-valle",
  storageBucket: "cafe-del-valle.firebasestorage.app",
  messagingSenderId: "746448158573",
  appId: "1:746448158573:web:46d3860edfd5a483ec6464"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);