import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ComponenteA from './componentes/componenteA/ComponenteA';
import ComponenteB from './componentes/componenteB/ComponenteB';
import {Provider} from 'react-redux';
import {miStore} from './store/miStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={miStore}>
    <ComponenteB />
    <ComponenteA />
    <ComponenteA />
    <ComponenteA />
    <ComponenteA />
    <ComponenteA />
    <ComponenteB />
    <ComponenteB />
    <ComponenteB />
    <ComponenteB />
  </Provider>
);
