import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKDc3BVY1cSjFCqoBUG6299SAHxUrwpMA",
    authDomain: "reactapp-coderhouse.firebaseapp.com",
    projectId: "reactapp-coderhouse",
    storageBucket: "reactapp-coderhouse.appspot.com",
    messagingSenderId: "1040888147043",
    appId: "1:1040888147043:web:2c2cdbd6ba6d7331ea1c56"
};

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app);