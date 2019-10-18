import axios from 'axios';

class Api {
  ENDERECO_DA_API = 'http://restrifood.herokuapp.com/';

  criarFornecedorApi = (fornecedor) => {
    return axios.post(`${this.ENDERECO_DA_API}/fornecedores`);
  };
}

export default Api;