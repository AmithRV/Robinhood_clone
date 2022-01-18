import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFmcsj99zYs9vCV3OzZ70IIhVcRMhXb6A",
  authDomain: "robinhood-clone-60256.firebaseapp.com",
  projectId: "robinhood-clone-60256",
  storageBucket: "robinhood-clone-60256.appspot.com",
  messagingSenderId: "332567343726",
  appId: "1:332567343726:web:9f5ec7e4787f074ae4ac7f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };