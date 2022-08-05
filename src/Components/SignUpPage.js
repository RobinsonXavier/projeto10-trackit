import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';

import logo from '../assets/images/logo.svg';

export default function SignUpPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({});

    function handleForm (ev) {
        setForm({
            ...form, [ev.target.name]: ev.target.value,
        })
    }

    function signUpAccount (ev) {
        ev.preventDefault();

        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', form);

        request.then( (response) => {
            navigate('/');
        })
    }

    return (
        <>
            <Signup>
                <img src={logo} alt='TrackIt logo' />
                <form onSubmit={signUpAccount}>
                    <input
                    type='email' 
                    placeholder='  email'
                    value={form.email}
                    name='email'
                    onChange={handleForm}
                    required />
                    <input
                    type='password' 
                    placeholder='  senha'
                    value={form.password}
                    name='password'
                    onChange={handleForm}
                    required />
                    <input
                    type='text' 
                    placeholder='  nome'
                    value={form.name}
                    name='name'
                    onChange={handleForm}
                    required />
                    <input
                    type='url' 
                    placeholder='  foto'
                    value={form.image}
                    name='image'
                    onChange={handleForm}
                    required />
                    <button type='submit' >Cadastrar</button>
                    <Link to='/'>
                        <span>Já tem uma conta? Faça login!</span>
                    </Link>
                </form>
            </Signup>
        </>
    )
}

const Signup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > img {
        width: 180px;
        margin: 50px 0;
    }

    & > form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        input {
            width: 300px;
            height: 45px;
            box-sizing: border-box;
            margin-bottom: 5px;
            text-align: start;
            border: 1px solid #D4D4D4;
            border-radius: 5px;
            font-size: 20px;
            color: #DBDBDB;
            opacity: 0.8;
        }

        input:focus {
            outline: #52B6FF;
        }

        button {
            width: 300px;
            height: 45px;
            box-sizing: border-box;
            background-color: #52B6FF;
            font-size: 20px;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            margin-bottom: 20px;
        }

        a {
            color: #52B6FF;
        }

    }
`;