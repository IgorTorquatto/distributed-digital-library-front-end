import { Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Cadastrar } from './pages/Cadastrar';
import { Teste } from './pages/Teste';

export const Router = () =>{
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/cadastrar' element={<Cadastrar/>}/>
            <Route path='/teste' element={<Teste/>}/>
        </Routes>
    )
}