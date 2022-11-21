import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import SAMPLE_PLANTS from './data/plants.json'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App plants={SAMPLE_PLANTS}/>
  </React.StrictMode>
);
