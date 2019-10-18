import React from 'react';

import { Link } from "react-router-dom";
import Api from './api';
import BarraDeNavegacao from './BarraDeNavegacao'

class Cadastro extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      telefone: '',
      senha: '',
      confirmacaoDeSenha: ''
    };

    this.api = new Api();
    

    this.alterarNome = this.alterarNome.bind(this);
    this.alterarEmail = this.alterarEmail.bind(this);
    this.alterarTelefone = this.alterarTelefone.bind(this);
    this.alterarSenha = this.alterarSenha.bind(this);
    this.alterarConfirmacaoDeSenha = this.alterarConfirmacaoDeSenha.bind(this);
    this.salvarInformacoesDoUsuario = this.salvarInformacoesDoUsuario.bind(this);
  }

  alterarNome(evento) {
    this.setState({
      ...this.state,
      nome: evento.target.value
    })
  }

  alterarEmail(evento) {
    this.setState({
      ...this.state,
      email: evento.target.value
    })
  }

  alterarTelefone(evento) {
    this.setState({
      ...this.state,
      telefone: evento.target.value
    })
  }

  alterarSenha(evento) {
    this.setState({
      ...this.state,
      senha: evento.target.value
    })
  }

  alterarConfirmacaoDeSenha(evento) {
    this.setState({
      ...this.state,
      confirmacaoDeSenha: evento.target.value
    })
  }

  salvarInformacoesDoUsuario() {
    const usuario = {...this.state};
    localStorage.setItem('restrifood-usuario', usuario);
    document.location.href = '/restricoes';
  }

  render() {
    return (
      <div className="Cadastro">
        <i className="fa fa-pencil"></i>
        <h2>Vamos criar sua conta</h2>
        <h3>É rápido e seguro!</h3>

        <form>
          <label>Seu nome</label><br />
          <input type="text" value={this.state.Nome}
            onChange={this.alterarNome} /><br />

          <label>E-mail</label><br />
          <input type="email" value={this.state.Email}
            onChange={this.alterarEmail} /><br />

          <label>Telefone</label><br />
          <input type="text" value={this.state.Telefone}
            onChange={this.alterarTelefone} /><br />

          <label>Senha</label><br />
          <input type="password" value={this.state.Senha}
            onChange={this.alterarSenha} /><br />

          <label>Confirme sua senha</label><br />
          <input type="password" value={this.state.ConfirmacaoDeSenha}
            onChange={this.alterarConfirmacaoDeSenha} /><br />

          <button type="button" className="botao" onClick={this.salvarInformacoesDoUsuario}>
            Criar minha conta
          </button><br />

          <Link to="/">Prefiro criar depois</Link>
        </form>
        <BarraDeNavegacao></BarraDeNavegacao>
      </div>
    );
  }
}

export default Cadastro;

