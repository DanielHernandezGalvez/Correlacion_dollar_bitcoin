// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// let  apiKey  = toString(import.meta.env.VITE_API_KEY);
//  let authDomain = toString(import.meta.env.VITE_AUTH_DOMAIN);
//  let projectId = toString(import.meta.env.VITE_PROJECT_ID);
//  let storageBucket = toString(import.meta.env.VITE_STORAGE_BUCKET);
//  let messagingSenderId = toString(import.meta.env.VITE_MESSAGING_SENDER_ID);
//  let appId = toString(import.meta.env.VITE_APP_ID);

let  apiKey  = `${import.meta.env.VITE_API_KEY}`;
 let authDomain = `${import.meta.env.VITE_AUTH_DOMAIN}`;
 let projectId = `${import.meta.env.VITE_PROJECT_ID}`;
 let storageBucket = `${import.meta.env.VITE_STORAGE_BUCKET}`;
 let messagingSenderId = `${import.meta.env.VITE_MESSAGING_SENDER_ID}`;
 let appId = `${import.meta.env.VITE_APP_ID}`;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};



// const firebaseConfig = {
//   apiKey,
//   authDomain,
//   projectId: "fir-contactos-b6ace",
//   storageBucket: "fir-contactos-b6ace.appspot.com",
//   messagingSenderId: "193068402470",
//   appId: "1:193068402470:web:8f4997bbdf96c03b57e3e7"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db