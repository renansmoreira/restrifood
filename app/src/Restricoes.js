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
    document.location.href = '/detalhes';
  }

  render() {
    return (
      <div className="restricoes">
        <i className="fa fa-pencil"></i>
        <h2>Vamos possui alguma patologia?</h2>
        <h3>Desta forma, podemos sugerir opções que se encaixam na sua dieta</h3>

        {Patologias.map(patologia => (
          <span key={patologia} className="cartao" onClick={() => this.registrarPatologia(patologia)}>
            {patologia}
            <p>{this.state.patologias.includes(patologia) ? 'Selecionado' : ''}</p>
          </span>
        ))}
        <br />

        <button type="button" className="botao" onClick={this.salvarPatologiasSelecionadas}
          disabled={!this.state.patologias || !this.state.patologias.length}>
          Próximo
        </button><br />
        <button type="button" className="botao">
          Não possuo patologias <br/>
          Apenas quero comer melhor
        </button>
      </div>
    );
  }
}

export default Restricoes;

