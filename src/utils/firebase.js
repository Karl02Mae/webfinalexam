// import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/analytics';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC5NrBh-GAyleVYkCYp6Z21j6x5ISCTpnc",
    authDomain: "webfinalexam-2b050.firebaseapp.com",
    projectId: "webfinalexam-2b050",
    storageBucket: "webfinalexam-2b050.appspot.com",
    messagingSenderId: "815686520117",
    appId: "1:815686520117:web:26fd1ca2c710f0e857d07c",
    measurementId: "G-EL286MZH8V"
});

// const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
firebase.analytics();