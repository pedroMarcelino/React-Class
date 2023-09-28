import React, { Component } from 'react';
import './assets/styleCro.css'

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            time: 0,
            botao: "Vai"
        }

        this.timer = null;
        this.vai = this.vai.bind(this)
        this.limpar = this.limpar.bind(this)
    }

    vai(){

        let state = this.state;

        if(this.timer != null){

            clearInterval(this.timer)
            this.timer = null;
            state.botao = 'Vai'
            this.setState(state)
        }else{
            state.botao = 'Parar'
            this.setState(state)
            this.timer = setInterval(() => {
                let state = this.state;
                state.time += 0.1;
                this.setState(state)
            }, 100)
        }

    }

    limpar(){
        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer)
            this.timer = null
            state.botao = 'Vai'
            this.setState(state)
        }

        state.time = 0
        this.setState(state)
        this.timer = null;
    }

    render(){
        return (
            <div className='backGround container'>
                {/* <img src={require('./assets/cronometro.png')} alt="cronometro" className='timer'/> */}
                <p className='timer'> {this.state.time.toFixed(1)} </p>
                <div className="areaBtn">
                    <button href="#" className='botao' onClick={this.vai} >{this.state.botao} </button>
                    <button href="#" className='botao' onClick={this.limpar}>Zerar</button>
                </div>
                <hr />
                <br />
            </div>
        )
    }
}

export default App;