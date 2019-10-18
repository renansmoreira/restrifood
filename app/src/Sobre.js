import React from 'react';
import logo from './logo.svg';

import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div className="Sobre">
      <header className="App-header">
        <h2>Restrifood</h2>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          O Restrifood nasceu da necessidade de atender pessoas com restrições alimentares e condições
          de saúde que requerem maior atenção ao que se come.
        </p>

        <Link to="/cadastro" className="botao">Avançar ></Link>
      </header>
    </div>
  );
}

export default Sobre;