import styled from "styled-components";

import TopApp from "./TopApp";

export default function Habits () {
    return (
        <>
            <TopApp />
            <Content>
                <div>
                    <h2></h2>
                    <button>+</button>
                </div>
                <div>outro componente</div>
                <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar  trackear!</span>
            </Content>

        </>
    )
}

const Content = styled.div`
    margin-top: 70px;
`;