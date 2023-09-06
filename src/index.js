import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Ciclo from './Ciclo';
import Membro from './components/Membro';
import Render from './Render';
import Lista from './Lista';
import Forms from './Forms';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Ciclo />
    <Membro nome="pedro" />
    <Render />
    <Lista />
    <Forms />
  </React.StrictMode>
);

