import styled from "styled-components";
import dayjs from "dayjs";

import TopApp from "./TopApp";
import BottomApp from "./BottomApp";

export default function Today () {
    let now = dayjs();
    return (
        <>
            <TopApp />
            <TodayPage>
                <MyDay>

                </MyDay>
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

    h2 {
        color: #126BA5;
        font-size: 22px;
        font-family: 'Lexend Deca', sans-serif;

    }
`;

const MyDay = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;