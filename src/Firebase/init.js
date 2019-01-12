import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD7bdWhButwnEGuYfdLvMM1bq-V-Q9Nxoo",
    authDomain: "mudd-self-storage.firebaseapp.com",
    databaseURL: "https://mudd-self-storage.firebaseio.com",
    projectId: "mudd-self-storage",
    storageBucket: "mudd-self-storage.appspot.com",
    messagingSenderId: "725507956875"
  };
 const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots:true })

 export default firebaseApp.firestore()