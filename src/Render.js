import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
        }

        this.chageStatus = this.chageStatus.bind(this);
    }

    chageStatus() {

        if (this.state.status === true) {
            this.setState({ status: false });
        } else {
            this.setState({ status: true });
        }

    }


    render() {

        return (
            <div>

                <h1>Renderizacao condicional </h1>
                <h3>Só renderiza se for true</h3>
                {
                    this.state.status === true &&
                    <h1>Logado</h1>

                }

                <button onClick={this.chageStatus}>Trocar status</button>
                <br />
                <hr />
            </div>
        );
    }
}

export default App;