import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTf-x7NmsZMqPpvIpUCF48NiWGniEmdwE",
    authDomain: "twitter-clone-nextleap.firebaseapp.com",
    projectId: "twitter-clone-nextleap",
    storageBucket: "twitter-clone-nextleap.appspot.com",
    messagingSenderId: "330544451466",
    appId: "1:330544451466:web:949654c8c9fa93b3740273",
    measurementId: "G-8LGVSJ0D64"
  };
  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;