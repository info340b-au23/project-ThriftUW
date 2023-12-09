import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
// Import the functions you need from the SDKs you need
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRd3KQ29iqBS2GJ4Cz4lTBvg043skbr0w",
  authDomain: "thriftuw.firebaseapp.com",
  databaseURL: "https://thriftuw-default-rtdb.firebaseio.com",
  projectId: "thriftuw",
  storageBucket: "thriftuw.appspot.com",
  messagingSenderId: "1001673176569",
  appId: "1:1001673176569:web:32f192d9a2d0445eecf928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

