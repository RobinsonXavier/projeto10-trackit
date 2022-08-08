import styled from "styled-components";

import TopApp from "./TopApp";
import BottomApp from "./BottomApp";

export default function Historic ({percentage}) {
    return (
        <>
        <TopApp />
        <HistoricPage>
            <div>
                <h2>Histórico</h2>
            </div>
            <span> Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
        </HistoricPage>
        <BottomApp />

        </>
    )
}

const HistoricPage = styled.div`
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