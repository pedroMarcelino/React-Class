import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  diminuir() {
    const state = this.state;
    state.contador -= 1;
    this.setState(state)
  }

  aumentar() {
    const state = this.state;
    state.contador += 1;
    this.setState(state)
  }

  render() {
    return (
      <div>
        <h1>Ola Bem vindo a calculadora </h1>
        <h3>
          <button onClick={this.diminuir} >-</button>
          <p>{this.state.contador}</p>
          <button onClick={this.aumentar} >+</button>
        </h3>

        <br></br>
        <hr></hr>
      </div>
    );
  }
}

export default App;
