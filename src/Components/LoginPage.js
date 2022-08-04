import {useNavigate, Link} from 'react-router-dom';

import styled from 'styled-components';

import logo from '../assets/images/logo.svg';

export default function LoginPage () {
    return (
        <>
            <Acess>
                <img src={logo} alt='TrackIt Logo' />
                <form>
                    <input />
                    <input />
                    <button>Entrar</button>
                    //Link
                </form>
            </Acess>
        </>
    )
}

const Acess = style.div`
    
`;