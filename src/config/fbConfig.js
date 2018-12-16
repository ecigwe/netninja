import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



// Initialize Firebase
var config = {
    apiKey: "AIzaSyDu-SmTDId-2-GJYSShjwJk4MM10Ofc9lY",
    authDomain: "net-ninja-mario-plan-27a20.firebaseapp.com",
    databaseURL: "https://net-ninja-mario-plan-27a20.firebaseio.com",
    projectId: "net-ninja-mario-plan-27a20",
    storageBucket: "net-ninja-mario-plan-27a20.appspot.com",
    messagingSenderId: "493025329307"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;