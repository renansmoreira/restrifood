import React from 'react';

import { Link } from "react-router-dom";
import Api from './api';

class Fornecedor extends React.PureComponent {

  constructor(props) {
    super(props);
    this.api = new Api();
    this.fornecedores = [{id:1, nome:"Casa do Luis", logo: ""}];
    this.api.buscarFornecedores()
      .then((dados) => {
        this.fornecedores = dados});
  }

  irParaDetalhesDoFornecedor(fornecedor) {
    localStorage.setItem('fornecedor', fornecedor.id);
    document.location.href = '/detalhes-fornecedor';
  }

  render() {
    return (
      <div className="Fornecedor">
        <input type="search" />
        <span>Locais</span>
        <ul>
          {this.fornecedores.map(fornecedor => (
            
            <li>
              <div onClick={() => this.irParaDetalhesDoFornecedor(fornecedor)}>
                <img src="{fornecedor.logo}"></img>
                <span>{fornecedor.nome}</span>
              </div>
            </li>
            
          ))}
        </ul>
      </div>
    );
  }
}

export default Fornecedor;