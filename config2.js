// const firebase=require('firebase')
// firebaseConfig = {
//     apiKey: "AIzaSyBc9qH3Iyl1R0zp7jf8MN0CLeMH2BdTRA4",
//     authDomain: "tutorial-ef9d5.firebaseapp.com",
//     projectId: "tutorial-ef9d5",
//     storageBucket: "tutorial-ef9d5.appspot.com",
//     messagingSenderId: "229803567458",
//     appId: "1:229803567458:web:ae9c3648c33cc1bc92a43b",
//     measurementId: "G-0YEWEQLZGE"
//   };
//   firebase.initializeApp(firebaseConfig)
//   const db=firebase.firestore()
//   const user=Db.collection("users")
//   module.exports=User;

const firebase=require('firebase')
const cors = require
// const firebaseConfig = {
//   apiKey: "AIzaSyA016cibP9SqGCsTqnpmVsqZRwW4aG_XcI",
//   authDomain: "web-dev-50e6e.firebaseapp.com",
//   projectId: "web-dev-50e6e",
//   storageBucket: "web-dev-50e6e.appspot.com",
//   messagingSenderId: "743842078745",
//   appId: "1:743842078745:web:aa7a5f9a578a996744ca88",
//   measurementId: "G-BG6CYFPDTS"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCWxN2SYeu0Lmd-8JfrXXnIrVSOy8bq6i4",
  authDomain: "aachms-88e2f.firebaseapp.com",
  projectId: "aachms-88e2f",
  storageBucket: "aachms-88e2f.appspot.com",
  messagingSenderId: "384327341216",
  appId: "1:384327341216:web:860983f1ee288f711925c5",
  measurementId: "G-HPVT4V7HJC"
};

firebase.initializeApp(firebaseConfig)
const db1=firebase.firestore()

const Hospital =   db1.collection("hospitals")
module.exports = Hospital





