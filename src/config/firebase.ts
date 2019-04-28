import firebase from "firebase";

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseUrl: process.env.REACT_APP_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    clientId: process.env.REACT_APP_CLIENTID
};

firebase.initializeApp(config);

const googleProvider = new firebase.auth.GoogleAuthProvider();

const firebaseAuth = (provider: firebase.auth.AuthProvider) => firebase.auth().signInWithPopup(provider);

const database = firebase.database().ref();

export const authRef = firebase.auth();
export const loginGoolge = () => firebaseAuth(googleProvider);
export const scoresRef = database.child("scores");
