const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyC-GZZ5uGMEQbNK5BkxhYFY_o_3Q2WvArc",
  authDomain: "backjo-7e8c3.firebaseapp.com",
  projectId: "backjo-7e8c3",
  storageBucket: "backjo-7e8c3.appspot.com",
  messagingSenderId: "335671821615",
  appId: "1:335671821615:web:6650b66a47ecafbc1a0dda"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("User");
module.exports = User;
