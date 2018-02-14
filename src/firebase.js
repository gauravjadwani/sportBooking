import firebase from 'firebase';
let config = {
    apiKey: "AIzaSyClHA6uED-Vl56oJKynEBxLHsljwTccT6M",
    authDomain: "sportsbooking-c080b.firebaseapp.com",
    databaseURL: "https://sportsbooking-c080b.firebaseio.com",
    projectId: "sportsbooking-c080b",
    storageBucket: "sportsbooking-c080b.appspot.com",
    messagingSenderId: "828398382141"
  };
firebase.initializeApp(config);
export default firebase;
export const database = firebase.database();
