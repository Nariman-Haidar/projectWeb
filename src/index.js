import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Model} from "./js/Model";
const root = ReactDOM.createRoot(document.getElementById('root'));

const model = new Model(); 
root.render(
  <React.StrictMode>
    <App model={model}/>
  </React.StrictMode>
);

reportWebVitals();
