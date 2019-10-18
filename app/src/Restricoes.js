import React from 'react';
import Patologias from './patologias';

class Restricoes extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      patologias: []
    };
    
    this.registrarPatologia = this.registrarPatologia.bind(this);
    this.salvarPatologiasSelecionadas = this.salvarPatologiasSelecionadas.bind(this);
  }

  registrarPatologia = (patologia) => {
    const patologiasSelecionadas = [...this.state.patologias];

    if (patologiasSelecionadas.includes(patologia)) {
      this.setState({
        patologias: patologiasSelecionadas.filter(patologiaSelecionada => 
          patologiaSelecionada !== patologia)
      })
    } else {
      this.setState({
        patologias: [
          ...patologiasSelecionadas,
          patologia
        ]
      })
    }
  }

  salvarPatologiasSelecionadas = () => {
    localStorage.setItem('restrifood-patologias', this.state.patologias);
    document.location.href = '/detalhes-fornecedor';
  }

  render() {
    return (
      <div className="container">
        <p className="cabecalho-formulario">
          <i className="fa fa-heartbeat u-texto-alinhado-ao-centro cabecalho-formulario__icone"></i>
        </p>
        <h2 className="cabecalho-formulario__titulo">Você possui alguma patologia?</h2>
        <h3 className="cabecalho-formulario__descricao">Desta forma, podemos sugerir opções de alimentação que se encaixam na sua dieta</h3>

        <div className="patologias">
        
        {Patologias.map(patologia => (
          <span key={patologia} className={`nome-patologia ${this.state.patologias.includes(patologia) ? ' nome-patologia_selecionado' : ''}` } onClick={() => this.registrarPatologia(patologia)}>
            {patologia}
            
          </span>
        ))}

        </div>

        <div className="grade__linha">
          <button type="button" className="botao cor_liberfood" onClick={this.salvarPatologiasSelecionadas}
            disabled={!this.state.patologias || !this.state.patologias.length}>
            Próximo
          </button><br />
          <button type="button" className="botao botao_grande botao_contorno cor_liberfood_contorno">
            Não possuo patologias 
            <span className="botao_descricao">Apenas quero comer melhor</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Restricoes;

