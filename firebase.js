import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1FjrA9b_PTm6JDgV7ri-UGf6ly2oMNo0",
  authDomain: "uber-eats-f238b.firebaseapp.com",
  projectId: "uber-eats-f238b",
  storageBucket: "uber-eats-f238b.appspot.com",
  messagingSenderId: "1080884426584",
  appId: "1:1080884426584:web:ac3b7ff1163bd16363572d"
};

//if no firebaseapp exists then add a new one
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA1FjrA9b_PTm6JDgV7ri-UGf6ly2oMNo0",
//   authDomain: "uber-eats-f238b.firebaseapp.com",
//   projectId: "uber-eats-f238b",
//   storageBucket: "uber-eats-f238b.appspot.com",
//   messagingSenderId: "1080884426584",
//   appId: "1:1080884426584:web:ac3b7ff1163bd16363572d"
// };