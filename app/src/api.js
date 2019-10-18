import axios from 'axios';

class Api {
  ENDERECO_DA_API = 'http://restrifood.herokuapp.com/';

  criarUsuario = (usuario) => {
    return axios.post(`${this.ENDERECO_DA_API}/clientes`, usuario);
  };

  buscarFornecedores = () => {
    return axios.get(`${this.ENDERECO_DA_API}fornecedores`);
  };

  consultarProdutosDeUmFornecedor = (idDoFornecedor) => {
    return axios.get(`${this.ENDERECO_DA_API}produtos/?id=${idDoFornecedor}`);
  };


  consultarProduto = (idDoProduto) => {
    return axios.get(`${this.ENDERECO_DA_API}produtos/?id=${idDoProduto}`);
  }
  
  buscarFornecedor = (idDoFornecedor) => {
    return axios.get(`${this.ENDERECO_DA_API}fornecedores/?id=${idDoFornecedor}`);
  }

}

export default Api;