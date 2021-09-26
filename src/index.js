import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACwBfRdqFSZbnHMD7n6a7XQDiEFr36wUw",
  authDomain: "music-app-63121.firebaseapp.com",
  projectId: "music-app-63121",
  storageBucket: "music-app-63121.appspot.com",
  messagingSenderId: "922809848648",
  appId: "1:922809848648:web:4eb90b0dd39463892d997d",
  measurementId: "G-NHXT81KQW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  
    <App />,
  document.getElementById('root')
);
