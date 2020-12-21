import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB0PiwQ3Rk7fVTnPpufulUz17-f4AhNJzQ",
  authDomain: "linkedin-clone-e552c.firebaseapp.com",
  projectId: "linkedin-clone-e552c",
  storageBucket: "linkedin-clone-e552c.appspot.com",
  messagingSenderId: "322418275086",
  appId: "1:322418275086:web:2b3786041c6d862b259d5f",
  measurementId: "G-SQP89GWDPR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
