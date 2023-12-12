import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';

import { initializeApp } from "firebase/app";

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
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

