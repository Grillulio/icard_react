import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './scss/global.scss';

const root = document.getElementById('root');
const reactRoot = createRoot(root); // Crea un "root" con createRoot

//reactRoot.render(<App />); // Utiliza reactRoot para renderizar tu aplicación


ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
