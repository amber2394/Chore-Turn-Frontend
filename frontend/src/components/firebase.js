import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCz5fYL5qp8Oe_vsshBMa6uKZ15pwYsJrQ",
  authDomain: "chore-turn-firebase-backend.firebaseapp.com",
  databaseURL: "https://chore-turn-firebase-backend.firebaseio.com",
  projectId: "chore-turn-firebase-backend",
  storageBucket: "",
  messagingSenderId: "1041570398652"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
