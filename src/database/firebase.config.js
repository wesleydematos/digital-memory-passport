import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Teste
// const firebaseConfig = {
//   apiKey: "AIzaSyAoJyMgHHEpeXVzxiA78a6JAnRNh1yf7Jc",
//   authDomain: "dev-backend-soulful.firebaseapp.com",
//   projectId: "dev-backend-soulful",
//   storageBucket: "dev-backend-soulful.appspot.com",
//   messagingSenderId: "57870479858",
//   appId: "1:57870479858:web:4be70a303ce67c8e5f3b6b"
// };


// Produção
const firebaseConfig = {
  apiKey: "AIzaSyCRMExFJ8K95nLafW3BNURdt6nnSF98T5A",
  authDomain: "soulful-9c2ac.firebaseapp.com",
  projectId: "soulful-9c2ac",
  storageBucket: "soulful-9c2ac.appspot.com",
  messagingSenderId: "847969831749",
  appId: "1:847969831749:web:2907dd2e268dde10eecc2c",
  measurementId: "G-0J2CZX96HR"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore();

export default db;