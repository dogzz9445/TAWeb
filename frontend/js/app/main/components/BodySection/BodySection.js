import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { creators } from '../../../../store/api/analyzed_recent';

import styled from "@emotion/styled";
import CardItem from "./CardItem";
import Chart from "../Chart/Chart";

const BodyContainer = styled.div`
    border: 1px solid black;
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
const ChartForm = styled.div`
    border: 1px solid blue;
`;
const Section2 = styled.div`
    border: 1px solid red;
`;

const BodySection = () => {
    const dispatch = useDispatch();
    const analyzedRecent = useSelector((state) => state.analyzedRecent);
    useEffect(() => {
        const action = creators.fetchAnalyzedRecent();
        dispatch(action);
    }, [dispatch]);
    
    return (
        <>
            <BodyContainer>
                <Section1>
                    <SectionTextDiv>
                        <span>실시간</span>
                    </SectionTextDiv>
                    <ChartForm>
                        <Chart />
                    </ChartForm>
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
