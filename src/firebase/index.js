import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDqsqDqHO98wpqkptbpaDRJ5brXOF6gX3k",
authDomain: "productivity-54231.firebaseapp.com",
projectId: "productivity-54231",
storageBucket: "productivity-54231.appspot.com",
messagingSenderId: "70375918408",
appId: "1:70375918408:web:a2fb72915e48c3e6e0417d",
measurementId: "G-GY03X9K9V3"
    
}

firebase.initializeApp(firebaseConfig)

export default firebase
