import firebase from "firebase/app";
//Pulling firebase utility library, tht belongs to folder firebase/app

import "firebase/firestore"; // for storage
import "firebase/auth"; // for authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ2g9Q1Zf3T-6QFsUKdly8q0Kih-a4xLE",
  authDomain: "crwn-clothing-db-4622b.firebaseapp.com",
  projectId: "crwn-clothing-db-4622b",
  storageBucket: "crwn-clothing-db-4622b.appspot.com",
  messagingSenderId: "939224453661",
  appId: "1:939224453661:web:2084dcd7a0f409abe76cf4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Create an instance of the Google provider object
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;