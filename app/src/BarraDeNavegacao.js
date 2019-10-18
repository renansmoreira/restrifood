import React from 'react';
import logo from './logo.svg';

import { Link } from "react-router-dom";

function BarraDeNavegacao() {
  return (
    <nav className="navegacao">
      <ul className="navegacao-lista">
      <li className="navegacao-lista__item">
          <Link to="/">
            <p>
              <i class="fa fa-home"></i>
            </p>
            Início
          </Link>
        </li>
        <li className="navegacao-lista__item">
          <Link to="/chat">
              <p>
                <i class="fa fa-comments"></i>
              </p>
              Chat
          </Link>
        </li>
        <li className="navegacao-lista__item">
          <Link to="/perfil">
              <p>
                <i class="fa fa-user"></i>
              </p>
              Perfíl
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BarraDeNavegacao;