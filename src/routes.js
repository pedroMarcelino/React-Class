import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Header from './components/Header';

function RoutesApp () {

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/Sobre' element={ <Sobre /> } />
            </Routes>
        </BrowserRouter>
    );

}

export default RoutesApp;