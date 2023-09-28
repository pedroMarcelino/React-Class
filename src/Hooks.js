import React, { useState } from 'react';

function App(){

    const [tarefas, setTarefas] = useState([
        'Pagar conta',
        'Estudar react'
    ]);

    const [input, setInput] = useState('');

    function handleAdd (){
        setTarefas([...tarefas, input])
        setInput('')
    }

    return (
        <div>
            <h1>HOOKS</h1>
            {tarefas.map(tarefa => (
                <li key={tarefa}>{tarefa}</li>
            ))}

            <input type="text" value={input} onChange={ (e) => {setInput(e.target.value)} } />
            <button type='button' onClick={handleAdd}>Adicionar</button>
            <br />
            <hr />
        </div>
    )
}

export default App;