// importing firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyA_RB49fCSqZUGlvejWJL07EhzzAA6mXII",
    authDomain: "neuron-ai-website.firebaseapp.com",
    projectId: "neuron-ai-website",
    storageBucket: "neuron-ai-website.appspot.com",
    messagingSenderId: "810977649097",
    appId: "1:810977649097:web:01afafd6833036e3194818",
    measurementId: "G-7BS0QVQE0R"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const [user] = useAuthState(auth);