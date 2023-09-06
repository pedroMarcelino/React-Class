import React, { Component } from 'react';

class Membro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: props.nome
        };

        this.entrarMatheus = this.entrarMatheus.bind(this)
    }

    entrarMatheus() {
        this.setState({
            nome: 'Matheus'
        })
    }


    render() {
        return (
            <div>
                <h1>Membros</h1>
                <h3> Bem vindo {this.state.nome}</h3>
                <button onClick={this.entrarMatheus}>Entrar com matheus</button>
                <button onClick={() => this.setState({ nome: "" })}>Sair</button>
                <br />
                <hr />
            </div>
        );
    }

}

export default Membro;