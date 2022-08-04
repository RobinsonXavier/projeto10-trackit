import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../assets/reset.css';
import '../assets/style.css';

import LoginPage from './LoginPage';


export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}