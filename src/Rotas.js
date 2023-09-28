import React, {useEffect, useState} from 'react';
import './assets/styleRota.css';

function App (){

    const [nutri, setNutri] = useState ([]);

    useEffect(() => {

        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

        fetch(url)
        .then((r) => {
            r.json()
            .then( (json) => {
                console.log(json)
                setNutri(json);
            })
        })

    }, [])

    return(
        <div className='container'>
            <header>
                <strong>React Nutri</strong>
            </header>

            {nutri.map((item)=>{

                return(
                    <article key={item.id} className='post'>
                        <strong className='titulo'>{item.titulo}</strong>
                        <img src={item.capa} alt={item.titulo} />
                        <p className='subtitulo'>{item.subtitulo}</p>
                        <a href='' className='botao'>Acessar</a>

                    </article>
                )

            })}

            <br />
            <hr />
        </div>
    )
}

export default App;