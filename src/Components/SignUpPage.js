import {useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import { ThreeDots } from  'react-loader-spinner';

import logo from '../assets/images/logo.svg';

export default function SignUpPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const [wait, setWait] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        if(wait) {
            setWait(!wait)
        }
    }, [refresh])

    function handleForm (ev) {
        setForm({
            ...form, [ev.target.name]: ev.target.value,
        })
    }

    function signUpAccount (ev) {
        ev.preventDefault();

        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', form);

        setWait(!wait);

        request.catch(error => {
            alert(`preencha os dados corretamento (${error.message})`)
            setRefresh(!refresh)
        })

        request.then( (response) => {
            navigate('/');
        })
    }

    return (
        <>
            <Signup>
                <img src={logo} alt='TrackIt logo' />
                <form onSubmit={signUpAccount}>
                    {wait 
                    ?
                    <input
                    disabled
                    type='email' 
                    placeholder='  email'
                    value={form.email}
                    name='email'
                    onChange={handleForm}
                    required />
                    :
                    <input
                    type='email' 
                    placeholder='  email'
                    value={form.email}
                    name='email'
                    onChange={handleForm}
                    required />
                    }
                   
                    {wait 
                    ?
                    <input
                    disabled
                    type='password' 
                    placeholder='  senha'
                    value={form.password}
                    name='password'
                    onChange={handleForm}
                    required />
                    :
                    <input
                    type='password' 
                    placeholder='  senha'
                    value={form.password}
                    name='password'
                    onChange={handleForm}
                    required />
                    }
                   
                    {wait 
                    ?
                    <input
                    disabled
                    type='text' 
                    placeholder='  nome'
                    value={form.name}
                    name='name'
                    onChange={handleForm}
                    required />
                    :
                    <input
                    type='text' 
                    placeholder='  nome'
                    value={form.name}
                    name='name'
                    onChange={handleForm}
                    required />
                    }
                    
                    {wait 
                    ?
                    <input
                    disabled
                    type='url' 
                    placeholder='  foto'
                    value={form.image}
                    name='image'
                    onChange={handleForm}
                    required />
                    :
                    <input
                    type='url' 
                    placeholder='  foto'
                    value={form.image}
                    name='image'
                    onChange={handleForm}
                    required />
                    }
                    
                    {wait 
                    ? <DisabledButton disabled type='submit' ><ThreeDots color="#ffffff" height={80} width={80} /></DisabledButton>
                    : <button type='submit' >Cadastrar</button> }

                    <Link to='/'>
                        <span>Já tem uma conta? Faça login!</span>
                    </Link>
                </form>
            </Signup>
        </>
    )
}

const Signup = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;

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

const DisabledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
`;