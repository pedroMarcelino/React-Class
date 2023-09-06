import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'teste@gmail.com',
            senha: '',
            sexo: 'masc'
        }

        this.trocaEmail = this.trocaEmail.bind(this)
    }

    trocaEmail(e) {
        let valorDigitado = e.target.value;
        this.setState({ email: valorDigitado })
    }

    render() {
        return (
            <div>

                <h1>Trabalhando com formulários</h1>

                <div>
                    Email:
                    <input type="email" name="email" id="" value={this.state.email}
                        onChange={this.trocaEmail} /><br />
                    senha:
                    <input type="password" name="password" id="" value={this.state.senha}
                        onChange={(e) => { this.setState({ senha: e.target.value }) }} /> <br />

                    Sexo:
                    <select name="sexo" value={this.state.sexo} onChange={(e) => { this.setState({ sexo: e.target.value }) }}>
                        <option value="masc">Masculino</option>
                        <option value="fem">Feminino</option>
                    </select>
                </div>

                <div>
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.senha}</h3>
                    <h3>{this.state.sexo}</h3>
                </div>

                <br />
                <hr />
            </div>
        );
    }

}

export default App;