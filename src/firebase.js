import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCMfQFZe7SP8vu9uRfY9qb9s7T7-bPXxcA",
  authDomain: "todo-react-a54af.firebaseapp.com",
  projectId: "todo-react-a54af",
  storageBucket: "todo-react-a54af.appspot.com",
  messagingSenderId: "689497709448",
  appId: "1:689497709448:web:b20182e9005014e9a7f83d"
});

const db=firebaseApp.firestore();

export default db;
//module.exports={db};