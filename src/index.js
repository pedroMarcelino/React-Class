import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Ciclo from './Ciclo';
import Membro from './components/Membro';
import Render from './Render';
import Lista from './Lista';
import Forms from './Forms';
import Form2 from './Form2';
import Forms2 from './Forms2';
import Biscoito from './Biscoito';
import Cronometro from './Cronometro';
import Hooks from './Hooks';
import Rotas from './Rotas';
import Caminho from './Caminho';
import FireApp from './FireApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Ciclo />
    <Membro nome="pedro" />
    <Render />
    <Lista />
    <Forms />
    <Form2 />
    <Forms2 />
    <Biscoito />
    <Cronometro/>
    <Hooks />
    <Rotas />
    <Caminho/>
    <FireApp />
  </React.StrictMode>
);

