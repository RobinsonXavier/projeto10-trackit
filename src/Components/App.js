import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../assets/reset.css';
import '../assets/style.css';

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import Habits from './Habits';

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

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage getUser={getUser} />} />
                <Route path='/cadastro' element={<SignUpPage />} />
                <Route path='/habitos' element={<Habits />} />
            </Routes>
        </BrowserRouter>
    )
}