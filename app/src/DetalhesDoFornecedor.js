import React, { Suspense } from 'react';
import { Link } from "react-router-dom";
import Api from './api';

class DetalhesDoFornecedor extends React.PureComponent {

  constructor(props) {
    super(props);
    this.produtos = [];
    this.api = new Api();
    this.idDoFornecedor = 1;
    this.state = {
      produtos: []
    };

    this.api.consultarProdutosDeUmFornecedor(this.idDoFornecedor)
      .then((resposta) => {
        this.setState({
          produtos: resposta
        })
      });
  }

  render() {
    return (
      <div className="detalhes-do-fornecedor">
        <Link to="/restricoes">
          voltar
        </Link>

        <h3>A Casa do Luís</h3> <br />
        (67) 3026-4647 Ver endereço <br />
        <span>Sem glúten</span>
        <span>Sem lactose</span>

        <h4>Categoria de produtos</h4>

        {this.state.produtos.map(produto => (
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.descricao}</p>
            <p>{produto.quantidade}</p>
            <p>R$ {produto.preco}</p>
            <img src={produto.urlDaImagem} height="100" width="100" />
          </div>
        ))}
      </div>
    )
  }
}

export default DetalhesDoFornecedor;
