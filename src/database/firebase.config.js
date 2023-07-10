import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAoJyMgHHEpeXVzxiA78a6JAnRNh1yf7Jc",
  authDomain: "dev-backend-soulful.firebaseapp.com",
  projectId: "dev-backend-soulful",
  storageBucket: "dev-backend-soulful.appspot.com",
  messagingSenderId: "57870479858",
  appId: "1:57870479858:web:4be70a303ce67c8e5f3b6b"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore();

export default db;