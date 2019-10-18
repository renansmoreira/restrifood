import React from 'react'
import { Link } from "react-router-dom";
import Api from './api';

class DetalhesDoProduto extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      produto: {}
    };

    this.idDoProduto = 1;
    this.api = new Api();
    this.api.consultarProduto(this.idDoProduto)
      .then((resposta) => {
        this.setState({
          produto: resposta
        })
    });
  }

  render() {
    return (
      <div className="detalhes-do-produto">
        <Link to="/detalhes-fornecedor">
          voltar
        </Link>

        <h3>Salada Vegan</h3> <br />
        <img src={this.state.produto.urlDaImagem} height="100" width="100" /> <br/>

        <p>{this.state.produto.descricao}</p>
        <p>R$ {this.state.produto.preco}</p>
        <p>{this.state.produto.quantidade}g</p> <br />

        <button type="button" className="botao">
          Fazer pedido
        </button>

        <p><strong>Tabela nutricional</strong></p>
        <p>{this.state.produto.tabelaNutricional}</p>
      </div>
    )
  }
}

export default DetalhesDoProduto;
