import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCHANSXPkFGq1PAVUzv4wO-qwDIg6Vi0kw",
    authDomain: "jitendra-portfolio.firebaseapp.com",
    projectId: "jitendra-portfolio",
    storageBucket: "jitendra-portfolio.appspot.com",
    messagingSenderId: "907270892335",
    appId: "1:907270892335:web:95590567c62003934c8fda"
  };


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();