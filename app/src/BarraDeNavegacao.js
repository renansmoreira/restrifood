import React from 'react';
import logo from './logo.svg';

import { Link } from "react-router-dom";

function BarraDeNavegacao() {
  return (
    <nav>
      <ul>
      <li>
          <a>
            <span class="fa fa-home"></span>
            Início
            </a>
        </li>
        <li>
          <a>
            <span class="fa fa-comments"></span>
            Chat
            </a>
        </li>
        <li>
          <a>
            <span class="fa fa-user"></span>
            Perfíl
            </a>
        </li>
      </ul>
    </nav>
  );
}

export default BarraDeNavegacao;