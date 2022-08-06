import {useState, useEffect} from 'react';

import styled from "styled-components";

import trash from "../assets/images/lixeirinha.svg"
import weekDays from "./datas/arrays";

export default function Habit ({name, arrDays}) {

    function validateDays(number) {
        for (let i = 0; i < arrDays.length; i++) {
            if(number === arrDays[i]) {
                console.log(true)
                return true;
            }
        }
        console.log(false)
        return false;
    }

    return (
        <>
            <MyHabit>
                <img src={trash} />
                <span>{name}</span>
                <div>
                    {weekDays.map((days, index) => validateDays(days.id)
                    ? <Selected key ={index}>{days.name}</Selected>  
                    : <div key={index} >{days.name}</div>)}
                </div>
            </MyHabit>
        </>
    )
}

const MyHabit = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 5px;
    position: relative;

    & > img {
        position: absolute;
        right: 10px;
        top: 10px;
    }
    
    span {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #666666;
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    div {
        display: flex;
        margin-left: 10px;
        margin-bottom: 10px;
        div {
            display: flex;
            justify-content: center !important;  
            align-items: center;
            width: 30px;
            height: 30px;
            border: 1px solid #D4D4D4;
            background-color: #ffffff;
            color: #DBDBDB;
            font-family: 'Lexend Deca', sans-serif;
            border-radius: 5px;
            margin: 2px;
        }
    }

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
        margin: 15px 0;
    }

`;

const Selected = styled.div`
    display: flex;
    justify-content: center !important;  
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    background-color: #D4D4D4 !important;
    color: #ffffff !important;
    font-family: 'Lexend Deca', sans-serif;
    border-radius: 5px;
    margin: 2px;
`;