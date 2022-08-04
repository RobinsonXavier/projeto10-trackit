import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../assets/reset.css';
import '../assets/style.css';

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';


export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/cadastro' element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    )
}