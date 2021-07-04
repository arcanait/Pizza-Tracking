import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCuJRLr2x6fG1PW6JOO-NeVnjmE_YywpMQ",
    authDomain: "pizza-tracking.firebaseapp.com",
    projectId: "pizza-tracking",
    storageBucket: "pizza-tracking.appspot.com",
    messagingSenderId: "1038863605341",
    appId: "1:1038863605341:web:1bf11833044de5baf6b7b4"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}