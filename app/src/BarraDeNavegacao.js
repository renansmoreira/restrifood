import React from 'react';
import logo from './logo.svg';

import { Link } from "react-router-dom";

function BarraDeNavegacao() {
  return (
    <nav>
      <ul>
      <li>
          <Link to="/">
            <span class="fa fa-home"></span>
            Início
          </Link>
        </li>
        <li>
          <Link to="/chat">
              <span class="fa fa-comments"></span>
              Chat
          </Link>
        </li>
        <li>
          <Link to="/perfil">
              <span class="fa fa-user"></span>
              Perfíl
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BarraDeNavegacao;