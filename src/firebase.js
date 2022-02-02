// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyASgFvg6B5RQSEd5qPHkxZBjxvAZH90OFk',
  authDomain: 'hanghae-react-8d4e2.firebaseapp.com',
  projectId: 'hanghae-react-8d4e2',
  storageBucket: 'hanghae-react-8d4e2.appspot.com',
  messagingSenderId: '36885112199',
  appId: '1:36885112199:web:5b32bc2b16b9e309485f22',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
