import { Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Cadastrar } from './pages/Cadastrar';
import { Teste } from './pages/Teste';
import { Inicio } from './pages/Início'; //Gestão Home
import { DetailedView } from './pages/DetailedView';

export const Router = () =>{
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/gestao/livros/cadastrar' element={<Cadastrar/>}/>
            <Route path='/gestao/home' element={<Inicio/>}/>
            <Route path='/teste' element={<Teste/>}/>
            <Route path='/explorar/detailedView' element={<DetailedView/>}/>
        </Routes>
    )
}