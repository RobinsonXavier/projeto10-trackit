import {useNavigate, Link} from 'react-router-dom';
import {useState} from 'react';

import styled from 'styled-components';

import logo from '../assets/images/logo.svg';

export default function SignUpPage() {
    const [form, setForm] = useState({});

    function handleForm (ev) {
        setForm({
            ...form, [ev.target.name]: ev.target.value,
        })
    }
    console.log(form)
    return (
        <>
            <Signup>
                <img src={logo} alt='TrackIt logo' />
                <form>
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
                    value={form.senha}
                    name='senha'
                    onChange={handleForm}
                    required />
                    <input
                    type='text' 
                    placeholder='  nome'
                    value={form.nome}
                    name='nome'
                    onChange={handleForm}
                    required />
                    <input
                    type='url' 
                    placeholder='  foto'
                    value={form.foto}
                    name='foto'
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
            font-family: 'Lexend Deca', sans-serif;
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
            font-family: 'Lexend Deca', sans-serif;
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