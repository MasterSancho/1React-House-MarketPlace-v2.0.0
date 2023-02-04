// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: 'AIzaSyChK4ehgsupMJcw2j5C6KR7oS-eLMhZCcM',
 authDomain: 'my-house-market-place-app.firebaseapp.com',
 projectId: 'my-house-market-place-app',
 storageBucket: 'my-house-market-place-app.appspot.com',
 messagingSenderId: '907984114020',
 appId: '1:907984114020:web:cbff3a3adcd9dee4d36a71',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
