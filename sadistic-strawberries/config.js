import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyCRCyrvDsDV7Y3awPN38cqMzFEWdHpuKwo",
  authDomain: "willyapp-ef95a.firebaseapp.com",
  databaseURL: "https://willyapp-ef95a-default-rtdb.firebaseio.com",
  projectId: "willyapp-ef95a",
  storageBucket: "willyapp-ef95a.appspot.com",
  messagingSenderId: "329857164386",
  appId: "1:329857164386:web:8b80c681e4b2e4525b5d3b"
};

// Initialize Firebase
if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
