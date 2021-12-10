// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6WoT2Gj3dcLAkLcjsIWghnKd5L4Fvkq8",
  authDomain: "animalopediabd.firebaseapp.com",
  projectId: "animalopediabd",
  storageBucket: "animalopediabd.appspot.com",
  messagingSenderId: "200870593601",
  appId: "1:200870593601:web:bc8490c740a257de6c32c0",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
