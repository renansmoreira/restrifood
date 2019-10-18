import axios from 'axios';

class Api {
  ENDERECO_DA_API = 'http://restrifood.herokuapp.com/';

  criarUsuario = (usuario) => {
    return axios.post(`${this.ENDERECO_DA_API}/clientes`, usuario);
  };

  buscarFornecedores = () => {
    // return Promise.resolve([
    //   {id:1, nome:"Casa do Luis", logo: 'https://uploads.knightlab.com/storymapjs/7a64bb0361468cdfc9b5bda65d5fc8f9/roteiro-burguer-cult/_images/burguer.png'}, {id:2, nome:"Casa do Bolos de Jesus", logo: ""}, {id:3, nome:"Comida Fit da Tia Maria", logo: ""}
    // ]);
    return axios.get(`${this.ENDERECO_DA_API}fornecedores`);
  };

  consultarProdutosDeUmFornecedor = (idDoFornecedor) => {
    return Promise.resolve([
      {
        id: 1, 
        nome: "X-Soja",
        descricao: "Breve descrição do produto que antecipa detalhes sobre o mesmo",
        quantidade: 100,
        preco: "20,50",
        urlDaImagem: 'https://uploads.knightlab.com/storymapjs/7a64bb0361468cdfc9b5bda65d5fc8f9/roteiro-burguer-cult/_images/burguer.png'
      }
    ]);

    // return axios.get(`$[]`)
  };

}

export default Api;