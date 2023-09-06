import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id: 1, nome: 'Pedro', curtidas: 120, comentarios: 20 },
                { id: 2, nome: 'Nicolle', curtidas: 1564, comentarios: 420 },
                { id: 3, nome: 'Bruno', curtidas: 132, comentarios: 10 },
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Trablhando com listas</h1>

                {this.state.feed.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.nome}</h3>
                            <p>Curtidas: {item.curtidas} / Comentarios {item.comentarios}</p>
                        </div>
                    )
                })}


                <br />
                <hr />
            </div>
        )
    }

}

export default App;