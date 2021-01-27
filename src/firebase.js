import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZpuZlEL5I-yzwm7gEALcKyoa9zLwkc6Y",
  authDomain: "discord-app-6600c.firebaseapp.com",
  projectId: "discord-app-6600c",
  storageBucket: "discord-app-6600c.appspot.com",
  messagingSenderId: "353243921321",
  appId: "1:353243921321:web:9e000f044971ecb5f5a2b8",
  measurementId: "G-PH0G00HD2G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
