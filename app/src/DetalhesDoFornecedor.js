import React, { Suspense } from 'react';
import { Link } from "react-router-dom";
import Api from './api';

class DetalhesDoFornecedor extends React.PureComponent {

  constructor(props) {
    super(props);
    this.produtos = [];
    this.api = new Api();
    this.idDoFornecedor = localStorage.getItem('fornecedor');
    this.state = {
      produtos: [],
      fornecedor: {}
    };

    this.api.consultarProdutosDeUmFornecedor(this.idDoFornecedor)
      .then((resposta) => {
        this.setState({
          produtos: resposta.data.data
        })
      });
    this.api.buscarFornecedor(this.idDoFornecedor)
    .then((resposta) => {
        this.setState({
          fornecedor: resposta.data.data
        })
    });
  }

  irParaDetalhesDoProduto(idDoProduto) {
    localStorage.setItem('idDoProduto', idDoProduto);
    document.location.href = '/detalhes-produto';
  }

  render() {
    return (
      <div className="detalhes-do-fornecedor">
        <Link to="/fornecedores">
          voltar
        </Link>

        <h3>{this.state.fornecedor.nome}</h3> <br />
        {this.state.fornecedor.telefone} <br />
        <span>Sem glúten</span>
        <span>Sem lactose</span>

        <h4>Categoria de produtos</h4>

        {this.state.produtos.map(produto => (
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.descricao}</p>
            <p>{produto.quantidade}</p>
            <p>R$ {produto.preco}</p>
            <img src={produto.foto} height="100" width="100" onClick={this.irParaDetalhesDoProduto(produto.id)} />
          </div>
        ))}
      </div>
    )
  }
}

export default DetalhesDoFornecedor;
