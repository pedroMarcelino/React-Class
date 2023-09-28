import { Link } from "react-router-dom";
import '../../assets/header.css'

function Header () {
    return(
        <header>
            <h2>Sujeito Developer</h2>
            <div className="menu">
                <Link to='/'>Home </Link>
                <Link to='/Sobre'>Sobre</Link>
            </div>
        </header>
    )
}

export default Header;