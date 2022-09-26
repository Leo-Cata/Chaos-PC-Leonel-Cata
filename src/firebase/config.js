// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCJ3KQvoTaTMjc9ITSN8iRLHXBur362-U0',
  authDomain: 'ecommerce-cata.firebaseapp.com',
  projectId: 'ecommerce-cata',
  storageBucket: 'ecommerce-cata.appspot.com',
  messagingSenderId: '700321554499',
  appId: '1:700321554499:web:96f8abb54b03579a48b4f6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
