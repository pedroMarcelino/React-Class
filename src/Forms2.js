import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                nome: 'Pedro',
                email: 'teste@gmail.com',
                senha: '123',
                sexo: 'masc'
            }

        }

        this.dadosForm = this.dadosForm.bind(this)
    }

    dadosForm(e) {
        let form = this.state.form;
        form[e.target.name] = e.target.value;

        this.setState({ form: form })
    }

    render() {
        return (
            <div>

                <h1>Trabalhando com formulários part 2</h1>

                <div>
                    nome
                    <input type="text" name="nome" value={this.state.form.nome}
                        onChange={this.dadosForm} /> <br />
                    Email:
                    <input type="text" name="email" id="" value={this.state.form.email}
                        onChange={this.dadosForm} /><br />
                    senha:
                    <input type="password" name="senha" id="" value={this.state.form.senha}
                        onChange={this.dadosForm} /> <br />

                    Sexo:
                    <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
                        <option value="masc">Masculino</option>
                        <option value="fem">Feminino</option>
                    </select>
                </div>

                <div>
                    <h3>{this.state.form.nome}</h3>
                    <h3>{this.state.form.email}</h3>
                    <h3>{this.state.form.senha}</h3>
                    <h3>{this.state.form.sexo}</h3>
                </div>

                <br />
                <hr />
            </div>
        );
    }

}

export default App;