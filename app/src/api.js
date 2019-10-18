import axios from 'axios';

class Api {
  ENDERECO_DA_API = 'http://restrifood.herokuapp.com/';

  criarUsuario = (usuario) => {
    return axios.post(`${this.ENDERECO_DA_API}/clientes`, usuario);
  };
}

export default Api;