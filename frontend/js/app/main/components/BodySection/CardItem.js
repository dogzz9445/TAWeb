import React from "react";
import styled from "@emotion/styled";

import DeckInfo from "./DeckInfo";

const CardContatiner = styled.div`
    border: 1px solid gold;
    margin: 30px;
    height: 100px;
`;
const CardName = styled.div`
    border: 1px solid green;
`;

const CardItem = () => {
    return (
        <>
            <CardContatiner>
                <CardName>
                    <span>덱 이름</span>
                </CardName>
                <DeckInfo />
            </CardContatiner>
        </>
    );
};

export default CardItem;
