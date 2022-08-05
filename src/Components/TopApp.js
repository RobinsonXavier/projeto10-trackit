import { useContext } from "react";
import styled from "styled-components";

import appName from '../assets/images/TrackIt.svg';
import UserContext from "./Contexts/UserContext";

export default function TopApp () {
    const {user} = useContext(UserContext);

    return (
        <>
            <Top>
                <img src={appName} alt='Trackit name'/>
                <Perfil src ={user.image} alt='User image' />
            </Top>
        </>
    )
}

const Top = styled.div`
    height: 70px;
    width: 100vw;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 5px rgb(40, 40, 40);
    z-index: 1;
    position: fixed;
    top: 0;

    img {
        margin: 0 15px;
        height: 50px;
        width: 98px;
    }

`;

const Perfil = styled.img`
    border-radius: 50%; 
    width: 50px !important;
`;