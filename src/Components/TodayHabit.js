import {useState, useEffect} from 'react';

import icon from '../assets/images/vicon.svg';
import styled from "styled-components";

export default function TodayHabit ({name, currentSequence, 
    highestSequence, done, id, checkHabit, uncheckHabit, getTodayHabit}) {
    const [swapDone, setSwapDone] = useState(false);
    const [current, setCurrent] = useState(currentSequence);
    const [highest, setHighest] = useState(highestSequence)

    useEffect(() => {

        if(done === false) {
            setSwapDone(false);
        } else {
            setSwapDone(true);
        }

    },[])

    return (
        <>
            <HabitComponent>
                <div>
                    <span>{name.length > 25 ? name.substring(0, 22)+'...' : name}</span>
                    <h6>Sequência atual: <GreenStrong>{current} dias</GreenStrong></h6>
                    <h6>Seu recorde: <strong current={current} highest={highest}>{highest} dias</strong></h6>
                </div>
                <Check done={swapDone} onClick={() => {
                    swapDone ? setCurrent(current - 1) : setCurrent(current + 1)
                    swapDone ? setHighest(highest - 1) : setHighest(highest + 1)
                    swapDone ? uncheckHabit(id) : checkHabit(id)
                    setSwapDone(!swapDone)
                    getTodayHabit();
                }}>
                    <img src={icon} alt='done' />
                </Check>
            </HabitComponent>
        </>
    )
}

const HabitComponent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 5px;
    margin: 5px 0 !important;


    span {
        display: inline-block;
        width: 260px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #666666;
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    h6 {
        font-size: 12px;
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        margin-left: 10px; 

        strong {
        color: ${props => props.current === props.highest ? '#8FC549' : '#666666'};
        }
    }


`;

const Check = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 69px;
    height: 69px;
    border-radius: 5px;
    background-color: ${props=> props.done ? '#8FC549' : '#E7E7E7'};

    img {
        width: 45px;
        color: #ffffff;
    }
`;

const GreenStrong = styled.strong `
    color: #8FC549 !important;
`;