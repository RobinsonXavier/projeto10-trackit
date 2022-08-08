import {useState, useEffect, useContext} from 'react';
import styled from "styled-components";
import axios from 'axios';

import TopApp from "./TopApp";
import BottomApp from "./BottomApp";
import Habit from './Habit';
import Day from './Day';
import UserContext from './Contexts/UserContext';
import ProgressBarContext from './Contexts/ProgressBarContext';
import { ThreeDots } from  'react-loader-spinner'


import weekDays from './datas/data';

export default function Habits ({percentage}) {
    const {user} = useContext(UserContext);
    const [swap, setSwap] = useState(false);
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);
    const [wait2, setWait2] = useState(false);
    const [percentageHabits, setPercentageHabits] = useState(0);
    const [newHabit, setNewHabit] = useState({
        name: '',
        days: []
    });

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        setPercentageHabits(percentage);
    },[]);

    useEffect(() => {

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);

        promise.then((response) => {
            setList([...response.data]);
            setCount(list.length);
            if(wait2) {
                setWait2(!wait2);
            }
        });
        
    }, [count]);


    function deleteHabits (idHabit) {

        const check = window.confirm("Está certo disso ?");

        if (check) {
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabit}`, config);

                promise.catch(error => alert('error ' + error.message));
                promise.then(response => {
                    setCount(list.length);
                    alert('Hábito deletado')});
        }
        
    }

    function setHabits (ev) {
        ev.preventDefault();

        const obj = {
            name: '',
            days: []
        };
        
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', newHabit, config);

        setWait2(!wait2);

        request.catch(error => {
            alert(`aconteceu um erro: ${error.message}`)
        })
        
        request.then((response) => {
            setCount(list.length);
            setSwap(!swap)
            console.log('tudo certo!');
        })

        setNewHabit({...obj});
    }

    return (
        <>
            <TopApp />
            <Content>
                <MyHabits>
                    <h2>Meus hábitos</h2>
                    <button onClick={() => setSwap(!swap)}>+</button>
                </MyHabits>
                <CreateHabit show={swap}>
                    <form onSubmit={setHabits}>
                        {wait2 
                        ?
                        <input
                            disabled
                            placeholder='  nome do hábito'
                            type='text'
                            value={newHabit.name}
                            required
                            onChange={(ev) => {
                                setNewHabit({
                                    ...newHabit,
                                    name: ev.target.value
                                })
                            }} /> 
                            :
                            <input 
                            placeholder='  nome do hábito'
                            type='text'
                            value={newHabit.name}
                            required
                            onChange={(ev) => {
                                setNewHabit({
                                    ...newHabit,
                                    name: ev.target.value
                                })
                            }} />}
                        
                        <div>
                            {weekDays.map((day, index) => <Day key={index} count={count} number={index} 
                            name={day.name} setNewHabit={setNewHabit} newHabit={newHabit} />)}
                        </div>
                        <ButtonDiv>
                            <span onClick={() => setSwap(!swap)}>Cancelar</span>
                            {wait2 
                            ? <DisabledButton disabled type='submit'><ThreeDots color="#ffffff" height={45} width={45} /></DisabledButton>
                            : <button type='submit'>Salvar</button>}
                            
                        </ButtonDiv>
                    </form>
                </CreateHabit>
                {list.length > 0 ? list.map((habit, index) => 
                <Habit key={index} id={habit.id} deleteHabits={deleteHabits} name={habit.name} arrDays={habit.days} />) 
                : <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar  trackear!</span>}
            </Content>
            <BottomApp />

        </>
    )
}

const Content = styled.div`
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

    & > span {
        display: block;
        color: #666666;
        font-size: 18px;
        width: 90vw;
        font-family: 'Lexend Deca', sans-serif;

    }
`;

const MyHabits = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        display: flex;
        justify-content: center;
        border-radius: 5px;
        color: #ffffff;
        background-color: #52B6FF;
        width: 40px;
        height: 35px;
        font-size: 22px;
        border: none;
    }
`;

const CreateHabit = styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    

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

    form {

        div {
            display: flex;
            justify-content: start;
        }

    }


`;

const ButtonDiv = styled.div`
    justify-content: end !important;
    margin: 20px 0;
    align-items: center;

    span {
        font-family: 'Lexend Deca', sans-serif;
        color: #52B6FF;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 84px;
        height: 35px;
        font-family: 'Lexend Deca', sans-serif;
        color: #ffffff;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
        margin-left: 25px;
    }
`;

const DisabledButton = styled.button`
    opacity: 0.6;
`;