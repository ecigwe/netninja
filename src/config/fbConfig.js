import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyDlRX3o_4IiJkP0IdNOu_HuqwA48mQq5R4",
    authDomain: "emmanuel-69749.firebaseapp.com",
    databaseURL: "https://emmanuel-69749.firebaseio.com",
    projectId: "emmanuel-69749",
    storageBucket: "emmanuel-69749.appspot.com",
    messagingSenderId: "627066400562"
    };
    firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;