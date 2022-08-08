import {useContext, useState} from 'react';

import styled from "styled-components";
import dayjs from "dayjs";
import axios from 'axios';

import TopApp from "./TopApp";
import BottomApp from "./BottomApp";
import { useEffect } from "react";

import UserContext from './Contexts/UserContext';
import ProgressBarContext from './Contexts/ProgressBarContext';
import TodayHabit from './TodayHabit';

export default function Today () {

    const {user} = useContext(UserContext);
    const [weekDay, setWeekDay] = useState('');
    const [todayHabit, setTodayHabit] = useState([]);
    const [finalCheck, setFinalCheck] = useState(0);
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

        getTodayHabit()
        
    },[])

    useEffect(() => {

        checkToday();
        
    },[todayHabit])

    useEffect(()=> {

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

    function getTodayHabit() {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

        promise.catch(error => alert(`Ocorreu um erro ${error.message}`))

        promise.then((response) => {
            console.log(response)
            setTodayHabit(response.data);
        })
        
    }

    function checkHabit (id) {

        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{}, config);

        request.catch(error => alert(`Deu algo errado: ${error.message}`));

        request.then( response => console.log("Deu Tudo certo"));
    }

    function uncheckHabit (id) {

        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{}, config);

        request.catch(error => alert(`Deu algo errado: ${error.message}`));

        request.then( response => console.log("Deu Tudo certo"));
    }

    function checkToday () {
        let checks= 0;
        for (let i = 0; i < todayHabit.length; i++) {
            if(todayHabit[i].done === true) {
                checks = checks + 1;
            }
        }
        checks = (checks/todayHabit.length) * 100;

        setFinalCheck(checks)
    }
    

    console.log(finalCheck)
    return (
        <>
            <TopApp />
            <TodayPage>
                <MyDay>
                    <h2>{day < 10 ? `${weekDay}, 0${day}/${month}` : `${weekDay}, ${day}/${month}`}</h2>
                    {finalCheck === 0  || isNaN(finalCheck) 
                    ? <p>Nenhum hábito concluído ainda</p> 
                    : <Percentage confirmed={finalCheck}>{finalCheck.toFixed(0)}% dos hábitos concluídos</Percentage>}
                </MyDay>
                {todayHabit.length > 0 
                ? todayHabit.map((habit, index) => <TodayHabit key={index} name={habit.name} id={habit.id} currentSequence={habit.currentSequence} 
                highestSequence={habit.highestSequence} getTodayHabit={getTodayHabit} uncheckHabit={uncheckHabit} checkHabit={checkHabit} done={habit.done} />) 
                : <h2>Carregando...</h2>}
            </TodayPage>
            <ProgressBarContext.Provider value={{finalCheck}}>
                <BottomApp />
            </ProgressBarContext.Provider>
            
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
        color: #bababa;
        margin-top: 2px;
    }
`;

const Percentage = styled.p`
    color: #8FC549 !important;
`;