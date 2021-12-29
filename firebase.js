// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAq5Yc0O4-6d4slHwp8C-Wee_N-bNfI3Iw',
  authDomain: 'meme-generator-7efa8.firebaseapp.com',
  projectId: 'meme-generator-7efa8',
  storageBucket: 'meme-generator-7efa8.appspot.com',
  messagingSenderId: '175581103269',
  appId: '1:175581103269:web:1307092f8102c36118794c',
  measurementId: 'G-6RQDR8TYTZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
