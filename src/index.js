import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import CSS
import "bootstrap/dist/css/bootstrap.min.css";
import '../src/index.css';

import App from './components/App';
import SAMPLE_PLANTS from './data/plants.json';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App plants={SAMPLE_PLANTS}/>
    </BrowserRouter>
  </React.StrictMode>
);
