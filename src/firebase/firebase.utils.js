import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCGuyNWZEG4RZC66sVbohOGi_l05C6yqGk",
    authDomain: "almonddb-25181.firebaseapp.com",
    projectId: "almonddb-25181",
    storageBucket: "almonddb-25181.appspot.com",
    messagingSenderId: "697597111392",
    appId: "1:697597111392:web:06bec88d20b46b7cd7a705",
    measurementId: "G-1HSYLDCL34"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;