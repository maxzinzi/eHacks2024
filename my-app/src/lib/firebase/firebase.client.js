import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8QdgKs1lkeHh3uCgY93wUwh3nyYUqiqU",
  authDomain: "hacktogether-93d56.firebaseapp.com",
  projectId: "hacktogether-93d56",
  storageBucket: "hacktogether-93d56.appspot.com",
  messagingSenderId: "592296426927",
  appId: "1:592296426927:web:c412c492a9a56894f5035a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app);