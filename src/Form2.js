import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            error: ''
        }

        this.cadastrar = this.cadastrar.bind(this)
    }

    cadastrar(e) {
        const { nome, email, senha } = this.state;
        this.setState({ error: '' })

        if (nome !== "" && email !== "" && senha !== "") {
            alert(`Nome: ${nome} \n Email: ${email} \n Senha: ${senha}\n`);
        } else {
            this.setState({ error: 'parece que esta faltando algo' })
        }

        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Continuação do forms</h1>
                <p>{this.state.error}</p>
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={this.state.nome}
                        onChange={(e) => { this.setState({ nome: e.target.value }) }} /><br />
                    <label>email:</label>
                    <input type="text1" name="email" value={this.state.email}
                        onChange={(e) => { this.setState({ email: e.target.value }) }} /><br />
                    <label>senha:</label>
                    <input type="password" name="senha" value={this.state.senha}
                        onChange={(e) => { this.setState({ senha: e.target.value }) }} /><br />

                    <button type='submit'>Enviar</button>
                </form>

                <div>
                    <h3>{this.state.nome}</h3>
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.senha}</h3>
                </div>

                <br />
                <hr />
            </div>
        )
    }

}

export default App;