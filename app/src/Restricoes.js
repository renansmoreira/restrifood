import React from 'react';

class Restricoes extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="restricoes">
        <i className="fa fa-files-medical"></i>
        <h2>Vamos possui alguma patologia?</h2>
        <h3>Desta forma, podemos sugerir opções que se encaixam na sua dieta</h3>
        <button type="button" className="botao">
          Próximo
        </button>
        <button type="button" className="botao">
          Não possuo patologias
        </button>
      </div>
    );
  }
}

export default Restricoes;

