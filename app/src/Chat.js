import React from 'react';
import MensagensDoChat from './mensagens-chat'

import { Link } from "react-router-dom";

class Chat extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      mensagem: '',
      mensagens: []
    }

    this.indiceDaMensagemDoChat = 0;
  }

  enviarMensagem = (evento) => {
    const tecla = evento.key;

    if (tecla === 'Enter') {
      const mensagensExistentes = [...this.state.mensagens];
      const mensagemNova = this.state.mensagem;

      this.setState({
        mensagem: '',
        mensagens: [...mensagensExistentes, mensagemNova]
      });

      setTimeout(() => {
        const mensagensExistentes = [...this.state.mensagens];

        this.setState({
          mensagens: [...mensagensExistentes, MensagensDoChat[this.indiceDaMensagemDoChat]]
        });

        this.indiceDaMensagemDoChat++;
      }, 1500);
    }
  }

  escreverMensagem = (evento) => {
    const mensagem = evento.target.value;
    
    this.setState({
      ...this.state,
      mensagem
    })
  }

  render() {
    return (
      <div className="detalhes-do-produto">
        <Link to="/detalhes-fornecedor">
          voltar
        </Link> <br />

        {this.state.mensagens.map((mensagem, indice) => (
          <p key={indice}>{mensagem}</p>
        ))}

        <textarea onKeyPress={this.enviarMensagem} value={this.state.mensagem}
          onChange={this.escreverMensagem}></textarea>
      </div>
    )
  }
}

export default Chat;
