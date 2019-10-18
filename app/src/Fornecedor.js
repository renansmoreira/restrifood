import React from 'react';
import Api from './api';

class Fornecedor extends React.PureComponent {

  constructor(props) {
    super(props);
    this.api = new Api();
    this.state = { fornecedores: []};
    this.api.buscarFornecedores()
    .then((dados) => {
        this.setState({
          fornecedores: dados.data.data
        })
    });
      
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
          {this.state.fornecedores.map(fornecedor => ( 
            <li key={fornecedor.id}>
              <div onClick={() => this.irParaDetalhesDoFornecedor(fornecedor)}>
                <img src={fornecedor.logo}></img>
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