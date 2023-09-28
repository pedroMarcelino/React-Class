import { Link } from 'react-router-dom';

function Home () {
    return(
        <div>
            <h1>Bem vindo a HOME </h1>
            <p>acesse pela a url e insira '/Sobre'</p>
            <Link to='/Sobre'>Sobre</Link>
        </div>
    )
}

export default Home;