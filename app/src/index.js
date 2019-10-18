import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './Sobre';
import Cadastro from './Cadastro';
import Restricoes from './Restricoes';
import ConfirmacaoDeCadastro from './ConfirmacaoDeCadastro';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import 'font-awesome/css/font-awesome.min.css';
import 'digix-ui/ativos/sass/temas/digix-ui.scss';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/sobre" component={Sobre}></Route>
      <Route path="/cadastro" component={Cadastro}></Route>
      <Route path="/restricoes" component={Restricoes}></Route>
      <Route path="/confirmacao" component={ConfirmacaoDeCadastro}></Route>
    </Switch>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
