import React from 'react';

import { Link } from "react-router-dom";

class Cadastro extends React.PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
    };

    this.alterarNome = this.alterarNome.bind(this);
  }

  alterarNome(evento) {
    this.setState({
      ...this.state,
      Nome: evento.target.value
    })
  }

  alterarEmail(evento) {
    this.setState({
      ...this.state,
      Email: evento.target.value
    })
  }

  alterarTelefone(evento) {
    this.setState({
      ...this.state,
      Telefone: evento.target.value
    })
  }

  alterarSenha(evento) {
    this.setState({
      ...this.state,
      Senha: evento.target.value
    })
  }

  alterarConfirmacaoDeSenha(evento) {
    this.setState({
      ...this.state,
      ConfirmacaoDeSenha: evento.target.value
    })
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

          Meu nome: <p>{this.state.Nome}</p>

          <label>E-mail</label><br />
          <input type="email" value={this.state.Email} 
            onChange={this.alterarEmail} /><br />

          <label>Telefone</label><br />
          <input type="text" value={this.state.Telefone} 
            onChange={this.alterarTelefone}/><br />

          <label>Senha</label><br />
          <input type="password" value={this.state.Senha} 
            onChange={this.alterarSenha}/><br />

          <label>Confirme sua senha</label><br />
          <input type="password" value={this.state.ConfirmacaoDeSenha} 
            onChange={this.alterarConfirmacaoDeSenha} /><br />

          <button type="submit" className="botao">
            Criar minha conta
        </button><br />

          <Link to="/">Prefiro criar depois</Link>
        </form>
      </div>
    );
  }
}

export default Cadastro;

