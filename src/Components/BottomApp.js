import {Link} from 'react-router-dom';

import styled from "styled-components";

export default function BottomApp () {
    return (
        <> 
            <Bottom>
                <Link to='/habitos' >
                    <Divbar>Hábitos</Divbar> 
                </Link>
                <Link to='/habitos' >
                    <Divcircle><span>Hoje</span>
                            <div>
                                <div></div>
                            </div>
                    </Divcircle>
                </Link>
                <Link to='/habitos' >
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

    & > div > div {
        position: absolute;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #52B6FF;
    }

    & > span {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #ffffff;
        z-index: 2;
    }


`;
