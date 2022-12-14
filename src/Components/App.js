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
import ProgressBarContext from './Contexts/ProgressBarContext';


export default function App () {
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [percentage, setPercentage] = useState(0);

    function getUser (response) {
        setUser(response.data);
        getToken(response);
    }

    function getToken (response) {
        setToken(response.data.token);
    }
    return (
        <BrowserRouter>
            <UserContext.Provider value={{token, user}}>
                <ProgressBarContext.Provider value={{percentage}}>
                    <Routes>
                        <Route path='/' element={<LoginPage getUser={getUser} />} />
                        <Route path='/cadastro' element={<SignUpPage />} />
                        <Route path='/habitos' element={<Habits percentage={percentage} />} /> 
                        <Route path='/hoje' element={<Today setPercentage={setPercentage} />} />  
                        <Route path='/historico' element={<Historic percentage={percentage} />} />
                    </Routes>
                </ProgressBarContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>
    )
}