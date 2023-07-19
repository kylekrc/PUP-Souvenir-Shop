import firebase from 'firebase';

import "firebase/auth";
import "firebase/firestore"
import "firebase/storage"



export const firebaseConfig = {
    apiKey: "AIzaSyCIy0BxzIedvebvlPqM83LlLB4VvfcsI40",
    authDomain: "test-firebase-83cdb.firebaseapp.com",
    projectId: "test-firebase-83cdb",
    storageBucket: "test-firebase-83cdb.appspot.com",
    messagingSenderId: "683679713681",
    appId: "1:683679713681:web:7fdf4086ea4d0a319f7230"
};
 
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export const auth = firebase.auth();
export const storage = firebase.storage();
export default db;
