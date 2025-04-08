import { Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { AddBook } from './pages/Add Book';

export const Router = () =>{
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/addBook' element={<AddBook/>}/>
        </Routes>
    )
}