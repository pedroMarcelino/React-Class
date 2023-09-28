import React, { Component } from 'react';
import './assets/style.css';

class App extends Component {
    constructor (props){
        super(props)
        this.state = {
            textoFrase:''
        }
        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
            'O riso é a menor distância entre duas pessoas.', 
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'];

    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatoria = Math.floor(Math.random() * this.frases.length)
        state.textoFrase = this.frases[numeroAleatoria]
        this.setState(state)
    }

    render(){
        return (
            <div  className='container'>
                <img className='img' src={require('./assets/biscoito.png')} alt="Biscoito" />
                <Button acaoBtn={this.quebraBiscoito} />
                <h3 className='textoFrase'>{this.state.textoFrase}</h3>

                <hr />
                <br />
            </div>
        )
    }
}

class Button extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>Abrir biscoito</button>
            </div>
        )
    }
}

export default App