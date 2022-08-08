import { useContext } from 'react';
import {Link} from 'react-router-dom';

import styled from "styled-components";
import ProgressBarContext from './Contexts/ProgressBarContext';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

export default function BottomApp () {
    const {finalCheck} = useContext(ProgressBarContext);
    return (
        <> 
            <Bottom>
                <Link to='/habitos' >
                    <Divbar>Hábitos</Divbar> 
                </Link>
                <Link to='/hoje' >
                    <Divcircle>
                        <CircularProgressbar value={finalCheck} text={`Hoje`} />
                    </Divcircle>
                </Link>
                <Link to='/historico' >
                        <Divbar>Histórico</Divbar> 
                </Link>
            </Bottom>
        </>
    )
}

const Bottom = styled.div`
    height: 70px;
    width: 100vw;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgb(40, 40, 40);
    position: fixed;
    z-index: 1;
    bottom: 0;

    a {
        text-decoration: none;
    }
`;

const Divbar = styled.div`
    margin: 0 25px;
    color: #52B6FF;
    font-size: 18px;
    font-family: 'Lexend Deca', sans-serif;

`;

const Divcircle = styled.div`
    width: 90px;
    height: 90px;
    background-color: #52B6FF;
    border-radius: 50%;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    & > div {
        position: absolute;
        width: 77px;
        height: 77px;
        background-color: #ffffff;
        border-radius: 50%;

    }

    & > span {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #ffffff;
        z-index: 2;
    }


`;
