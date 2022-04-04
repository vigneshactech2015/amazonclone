import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDh_hw9vzF4TJYIehEUhjhY1b3G8_YQ1uA",
    authDomain: "clone-3da42.firebaseapp.com",
    databaseURL: "https://clone-3da42.firebaseio.com",
    projectId: "clone-3da42",
    storageBucket: "clone-3da42.appspot.com",
    messagingSenderId: "906167149134",
    appId: "1:906167149134:web:dbb664cde58830141d991f"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth};