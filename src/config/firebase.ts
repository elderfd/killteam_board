import firebase from "firebase";
import "firebase/firestore";

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    clientId: process.env.REACT_APP_CLIENTID
};

firebase.initializeApp(config);

const googleProvider = new firebase.auth.GoogleAuthProvider();

// const firebaseAuth = (provider: firebase.auth.AuthProvider) => firebase.auth().signInWithRedirect(provider);

const database = firebase.firestore();

export const authRef = firebase.auth();
export const loginGoogle = () => {
    firebase.auth().signInWithRedirect(googleProvider)
    // .then(() => {
    //     var credential = firebase.auth.GoogleAuthProvider.credential(
    //         googleUser.getAuthResponse().id_token);
    //         firebase.auth().signInWithCredential(credential)
    // });

    // firebaseAuth(googleProvider).then()

    
};
export const db = database;
