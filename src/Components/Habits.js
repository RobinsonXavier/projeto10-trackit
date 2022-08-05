import {useState} from 'react';
import styled from "styled-components";

import TopApp from "./TopApp";
import BottomApp from "./BottomApp";
import Habit from './Habit';

export default function Habits () {
    const [swap, setSwap] = useState(false);
    const[list, setList] = useState('');
    console.log(swap);
    return (
        <>
            <TopApp />
            <Content>
                <MyHabits>
                    <h2>Meus hábitos</h2>
                    <button onClick={() => setSwap(!swap)}>+</button>
                </MyHabits>
                <CreateHabit show={swap}>
                    <form>
                        <input placeholder='  nome do hábito' />
                        <div>
                            <div>D</div>
                            <div>S</div>
                            <div>T</div>
                            <div>Q</div>
                            <div>Q</div>
                            <div>S</div>
                            <div>S</div>
                        </div>
                        <ButtonDiv>
                            <span>Cancelar</span>
                            <button>Salvar</button>
                        </ButtonDiv>
                    </form>
                </CreateHabit>
                {list ? list.map(habit => 
                <Habit />) 
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

            div {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30px;
                height: 30px;
                border: 1px solid #D4D4D4;
                color: #DBDBDB;
                font-family: 'Lexend Deca', sans-serif;
                border-radius: 5px;
                margin: 2px;
            }


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