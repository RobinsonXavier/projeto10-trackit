import {useContext, useState} from 'react';

import styled from "styled-components";
import dayjs from "dayjs";
import axios from 'axios';

import TopApp from "./TopApp";
import BottomApp from "./BottomApp";
import { useEffect } from "react";

import UserContext from './Contexts/UserContext';
import TodayHabit from './TodayHabit';

export default function Today () {
    const {user} = useContext(UserContext);
    const [weekDay, setWeekDay] = useState('');
    const [todayHabit, setTodayHabit] = useState([]);
    let now = dayjs();
    let day = now.date();
    let month = now.month() + 1;
    month < 10 ? month = '0' + month : month = month;

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    useEffect(() => {

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

        promise.catch(error => alert(`Ocorreu um erro ${error.message}`))

        promise.then((response) => {
            console.log(response)
            setTodayHabit(response.data);
        })
    },[])

    useEffect(( )=> {

        if(now.day() === 0) {
            setWeekDay('Domingo');
        }
        if(now.day() === 1) {
            setWeekDay('Segunda');
        }
        if(now.day() === 2) {
            setWeekDay('Terça');
        }
        if(now.day() === 3) {
            setWeekDay('Quarta');
        }
        if(now.day() === 4) {
            setWeekDay('Quinta');
        }
        if(now.day() === 5) {
            setWeekDay('Sexta');
        }
        if(now.day() === 6) {
            setWeekDay('Sábado');
        }
    
    },[]);


    console.log(todayHabit)
    return (
        <>
            <TopApp />
            <TodayPage>
                <MyDay>
                    <h2>{day < 10 ? `${weekDay}, 0${day}/${month}` : `${weekDay}, ${day}/${month}`}</h2>
                    <p>Nenhum hábito concluído ainda</p>
                </MyDay>
                {todayHabit.length > 0 
                ? todayHabit.map((habit, index) => <TodayHabit key={index} name={habit.name} currentSequence={habit.currentSequence} 
                highestSequence={habit.highestSequence} done={habit.done} />) 
                : "Não tem hábitos por hoje."}
            </TodayPage>
            <BottomApp />
        </>
    )
}

const TodayPage = styled.div `
    margin-top: 70px;
    margin-bottom: 70px;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
        margin: 20px 5px;
        width: 90vw;
    }

    h2 {
        color: #126BA5;
        font-size: 22px;
        font-family: 'Lexend Deca', sans-serif;

    }
`;

const MyDay = styled.div`
    display: flex;
    flex-direction: column;

    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #BABABA;
        margin-top: 2px;
    }
`;