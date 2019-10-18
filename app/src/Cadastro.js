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
      <div className="container">
        <div className="formulario">
          <div className="cabecalho-formulario">
            <i className="fa fa-edit cabecalho-formulario__icone"></i>
            <h2 className="cabecalho-formulario__titulo">Vamos criar sua conta</h2>
            <h3 className="cabecalho-formulario__descricao">É rápido e seguro!</h3>
          </div>

          <form className="formulario">
            <label className="u-exibir-em-bloco">Seu nome</label>
            <input type="text" value={this.state.Nome}
              onChange={this.alterarNome} /><br />

            <label className="u-exibir-em-bloco">E-mail</label>
            <input type="email" value={this.state.Email}
              onChange={this.alterarEmail} /><br />

            <label className="u-exibir-em-bloco">Telefone</label>
            <input type="text" value={this.state.Telefone}
              onChange={this.alterarTelefone} /><br />

            <label className="u-exibir-em-bloco">Senha</label>
            <input type="password" value={this.state.Senha}
              onChange={this.alterarSenha} /><br />

            <label className="u-exibir-em-bloco">Confirme sua senha</label>
            <input type="password" value={this.state.ConfirmacaoDeSenha}
              onChange={this.alterarConfirmacaoDeSenha} /><br />

            <button type="button" className="botao botao_largura-total cor_liberfood" onClick={this.salvarInformacoesDoUsuario}>
              Criar minha conta
            </button><br />

          </form>
        </div>
      </div>
    );
  }
}

export default Cadastro;

