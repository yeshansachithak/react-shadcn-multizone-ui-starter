// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAnjgsrT5Vbk5kNnfAmRrRyRId_8LaUYLo",
  authDomain: "unifyitapp.firebaseapp.com",
  projectId: "unifyitapp",
  storageBucket: "unifyitapp.firebasestorage.app",
  messagingSenderId: "659591850632",
  appId: "1:659591850632:web:25b25f1740a61af8eecd3d",
  measurementId: "G-3HM3CS3HG9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
