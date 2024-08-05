// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr0a1HWBIad18L0L3hnR-LxVioxv1USzo",
  authDomain: "item-management-8b9c1.firebaseapp.com",
  projectId: "item-management-8b9c1",
  storageBucket: "item-management-8b9c1.appspot.com",
  messagingSenderId: "699402575873",
  appId: "1:699402575873:web:cd62282f1e308ec4762000",
  measurementId: "G-PEP32SBQP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
//const analytics = getAnalytics(app);
export {firestore};
