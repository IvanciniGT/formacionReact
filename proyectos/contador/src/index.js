import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contador from './Contador';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contador nombre="Ivan" />   
    <Contador nombre="Ivan1" />
    <Contador nombre="Ivan2" />
    <Contador nombre="Ivan3" />
    <Contador nombre="Ivan4" />
    <Contador nombre="Ivan5" />
  </React.StrictMode>
);


// <Contador nombre="Ivan2" />  -> new Contador( {nombre: "Ivan2"} )
// root.render( .... ) -> Meter esos componentes en el DOM 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
