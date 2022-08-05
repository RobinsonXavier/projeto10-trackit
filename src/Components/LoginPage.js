import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';

import logo from '../assets/images/logo.svg';

export default function LoginPage ({getUser}) {
    const navigate = useNavigate();
    const[login, setLogin] = useState({});

    function handleLogin(ev) {
        setLogin({
            ...login, [ev.target.name]: ev.target.value,
        });
    }

    function loginApi (ev) {
        ev.preventDefault();

        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', login);

        request.then((response) => {

            getUser(response);
            navigate('/habitos');
        })
    }

    return (
        <>
            <Acess>
                <img src={logo} alt='TrackIt Logo' />
                <form onSubmit={loginApi}>
                    <input 
                    type='email' 
                    placeholder='  email'
                    value={login.email}
                    name='email'
                    onChange={handleLogin}
                    required
                    />
                    <input 
                    type='password' 
                    placeholder='  senha'
                    value={login.senha}
                    name='senha'
                    onChange={handleLogin}
                    required
                     />
                    <button type='submit' >Entrar</button>
                    <Link to='/cadastro'>
                        <span>Não tem uma conta ? Cadastre-se</span>
                    </Link>
                </form>
            </Acess>
        </>
    )
}

const Acess = styled.div`   
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