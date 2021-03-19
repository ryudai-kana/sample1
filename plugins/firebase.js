import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBqAy-q73rune_oLr77nimz-PY1fa_GagE",
    authDomain: "webapp-ccdf0.firebaseapp.com",
    databaseURL: "https://webapp-ccdf0-default-rtdb.firebaseio.com",
    projectId: "webapp-ccdf0",
    storageBucket: "webapp-ccdf0.appspot.com",
    messagingSenderId: "635285140169"
  })
}

export default firebase
