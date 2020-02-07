import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyA47nX6-XI5_BR0GnJyYlUccErwEqZa6d0",
    authDomain: "my-taskapp.firebaseapp.com",
    databaseURL: "https://my-taskapp.firebaseio.com",
    projectId: "my-taskapp",
    storageBucket: "my-taskapp.appspot.com",
    messagingSenderId: "127237131298",
    appId: "1:127237131298:web:e3520ccfa9a2493ab84e7b",
    measurementId: "G-M0Y95CJZLW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true})


export default firebase;