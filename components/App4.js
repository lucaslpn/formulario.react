import React from 'react';

class App4 extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = { nome: undefined, txtNome: '' };
  }

  componentDidMount = () => {
    const nome = sessionStorage.getItem('nome');
    if (nome) this.setState({nome});
  }

  changetxtName = (event) => {
    this.setState({txtNome: event.target.value});
  }

  persistName = ()=>{
    this.setState({nome: this.state.txtNome});
    sessionStorage.setItem('nome', this.state.txtNome)
  }

  render() {
    
    const renderForm = ()=>{
      return (
        <>
        Nome: <input type="text" value={this.state.nome} onChange={this.changetxtName}></input>
        <button onClick={this.persistName}>
          Salvar
        </button>
        </>
      );
    }
      
    const renderTxt = () =>{
      return (
        <>
          <p>Olá {this.state.nome}</p>
        </>
      );
    }

    return !this.state.nome ? renderForm() : renderTxt();


  }
}

export default App4;
