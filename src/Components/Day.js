import {useState} from 'react';

import styled from "styled-components";

export default function Day ({name, number, setNewHabit, newHabit}) {
    const [validate, setValidate] = useState(false);
    return (
        <>
            <DayName validate={validate} onClick={() => {
                if (validate) {
                    const arr = []
                    for (let i = 0; i < newHabit.days.length; i++) {
                        if(newHabit.days[i] === number) {
                        } else {
                            arr.push(newHabit.days[i])
                        }   
                    }
                    setValidate(!validate);
                    setNewHabit({
                        ...newHabit,
                        days: arr
                    })
                } else {
                    setValidate(!validate);
                    setNewHabit({
                        ...newHabit,
                        days:[...newHabit.days, number]})
                }
                
            }}>
                {name}
            </DayName>
        </>
    )
}

const DayName = styled.div `
    display: flex;
    justify-content: center !important;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    background-color: ${props => props.validate ? '#D4D4D4' : '#ffffff'};
    color: ${props => props.validate ? '#ffffff' : '#DBDBDB'};
    font-family: 'Lexend Deca', sans-serif;
    border-radius: 5px;
    margin: 2px;
`;