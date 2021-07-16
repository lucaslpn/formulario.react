import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import App from './components/App';
// eslint-disable-next-line no-unused-vars
import App2 from './components/App2';
// eslint-disable-next-line no-unused-vars
import App3 from './components/App3';
// eslint-disable-next-line no-unused-vars
import App4 from './components/App4';
// eslint-disable-next-line no-unused-vars
import Lista from './components/Lista';
// eslint-disable-next-line no-unused-vars
import {Lista2, Item} from './components/Lista2';
import Formulario from './components/Formulario';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Formulario>

    </Formulario>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

//<Lista2>
//      <Item key={999} id={999} completo={false}>
//      Teste1
//      </Item>

//      <Item key={998} id={998} completo={true}>
//        Teste2
//      </Item>
//    </Lista2> 

// <App2 title="DevMachine">
//     Criando Desenvolvedores
//    </App2>

//    <App2 title="StackMachine">
//     Criando FullStack
//    </App2>   