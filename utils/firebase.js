/* // firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
const fire = firebase.initializeApp({
    apiKey: "AIzaSyA4xJEy4lf0n5v1JJBjle9Embi_yC-XnX4",
    authDomain: "ayudapp-b105c.firebaseapp.com",
    projectId: "ayudapp-b105c",
    storageBucket: "ayudapp-b105c.appspot.com",
    messagingSenderId: "709109360263",
    appId: "1:709109360263:web:0f6955c6b2e4e777ff7a22"
});
export const auth = fire.auth();
export const db = fire.firestore();
export default {
    fire,
}; */