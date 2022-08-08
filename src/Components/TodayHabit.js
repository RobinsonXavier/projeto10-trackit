import {useState, useEffect} from 'react';

import icon from '../assets/images/vicon.svg';
import styled from "styled-components";

export default function TodayHabit ({name, currentSequence, highestSequence, done}) {
    const [swapDone, setSwapDone] = useState(false);

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
                    <h6>Sequência atual: {currentSequence} dias</h6>
                    <h6>Seu recorde: {highestSequence} dias</h6>
                </div>
                <Check done={swapDone} onClick={() => {
                    setSwapDone(!swapDone)
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
