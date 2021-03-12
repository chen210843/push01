import firebase from 'firebase/app'
import 'firebase/firestore'
// import 'firebase/auth'
// Initialize Cloud Firestore through Firebase

if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyDiOYmFxy-O46e4c3fIRfv-8TMpyyh0nns",
        authDomain: "cs-313-db.firebaseapp.com",
        projectId: "cs-313-db",
        storageBucket: "cs-313-db.appspot.com",
        messagingSenderId: "157750849152",
        appId: "1:157750849152:web:74a0a400a0af76fb2c0065",
        measurementId: "G-B00EFNLZDH"
      }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
// export const auth = firebase.auth()
