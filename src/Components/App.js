import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../assets/reset.css';
import '../assets/style.css';

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import Habits from './Habits';
import Today from './Today';
import Historic from './Historic';

import UserContext from './Contexts/UserContext';


export default function App () {
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');

    function getUser (response) {
        setUser(response.data);
        getToken(response);
    }

    function getToken (response) {
        setToken(response.data.token);
    }
    console.log(user);
    return (
        <BrowserRouter>
            <UserContext.Provider value={{token, user}}>
                <Routes>
                    <Route path='/' element={<LoginPage getUser={getUser} />} />
                    <Route path='/cadastro' element={<SignUpPage />} />
                    <Route path='/habitos' element={<Habits />} /> 
                    <Route path='/hoje' element={<Today />} />  
                    <Route path='/historico' element={<Historic />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}