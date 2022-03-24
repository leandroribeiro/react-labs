import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// const clientCredentials = {
//     apiKey: "AIzaSyAQGRTP5AUWyqPIIq7MoeJBurIv7X6REhk",
//     authDomain: "react-labs-01.firebaseapp.com",
//     projectId: "react-labs-01",
//     storageBucket: "react-labs-01.appspot.com",
//     messagingSenderId: "197525819381",
//     appId: "1:197525819381:web:246598b1bc4a79fdaa1abc"
// };



if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
}

export default firebase;
