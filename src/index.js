import React from 'react';
import ReactDOM from 'react-dom/client';

import { initializeApp } from "firebase/app";

import { BrowserRouter } from 'react-router-dom';

// import CSS
import "bootstrap/dist/css/bootstrap.min.css";
import '../src/index.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

import App from './components/App';
import SAMPLE_PLANTS from './data/plants.json';

const firebaseConfig = {
  apiKey: "AIzaSyAqQ5Lg_GZ9n4bC8g3cCrbuxMTrgvN4fBM",
  authDomain: "plant-parenthood-b1597.firebaseapp.com",
  projectId: "plant-parenthood-b1597",
  storageBucket: "plant-parenthood-b1597.appspot.com",
  messagingSenderId: "690396716743",
  appId: "1:690396716743:web:a847181beb27df40f5a8e2",
  measurementId: "G-BS4Z77Q7KE"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App plants={SAMPLE_PLANTS}/>
    </BrowserRouter>
);
