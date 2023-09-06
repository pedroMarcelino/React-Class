import React, { Component } from 'react';

class Ciclo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: '00:00:00'
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000)
    }


    render() {
        return (
            <div>
                <h1>CICLO</h1>
                <p>A hora é {this.state.time}</p>
                <br></br>
                <hr></hr>
            </div>
        );
    }
}

export default Ciclo;