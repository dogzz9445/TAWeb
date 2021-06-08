import React from "react";
import styled from "@emotion/styled";
import CardItem from "./CardItem";
import ChartForm from "../Chart/ChartForm";

const BodyContainer = styled.div`
    border: 1px solid black;
    margin-top: 150px;
`;

const Section1 = styled.div`
    border: 1px solid gold;
`;
const SectionTextDiv = styled.div`
    border: 1px solid skyblue;
    & span {
        font-size: 15pt;
    }
`;
const ChartBox = styled.div`
    border: 1px solid blue;
`;
const Section2 = styled.div`
    border: 1px solid red;
`;

const BodySection = () => {
    return (
        <>
            <BodyContainer>
                <Section1>
                    <SectionTextDiv>
                        <span>실시간</span>
                    </SectionTextDiv>
                    <ChartBox>
                        <ChartForm />
                    </ChartBox>
                </Section1>
                <Section2>
                    카드목록
                    <CardItem />
                </Section2>
            </BodyContainer>
        </>
    );
};

export default BodySection;
