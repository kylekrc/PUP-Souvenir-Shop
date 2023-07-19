import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCIy0BxzIedvebvlPqM83LlLB4VvfcsI40",
    authDomain: "test-firebase-83cdb.firebaseapp.com",
    projectId: "test-firebase-83cdb",
    storageBucket: "test-firebase-83cdb.appspot.com",
    messagingSenderId: "683679713681",
    appId: "1:683679713681:web:7fdf4086ea4d0a319f7230"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
 
export default db;