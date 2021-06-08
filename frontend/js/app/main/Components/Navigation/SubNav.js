import React from "react";
import styled from "@emotion/styled";

const SubNavContatiner = styled.div`
    position: fixed;
    border: 1px solid gold;
    width: 100%;
    display: flex;
`;

const SubNavSection = styled.div`
    border: 1px solid blue;
    display: flex;
    height: 50px;
    width: 100%;
`;

const SubNavUl = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid red;
`;
const SubNavLi = styled.li`
    margin: 10px;

    padding: 10px;
`;

const SubNav = () => {
    return (
        <>
            <SubNavContatiner>
                <SubNavSection>
                    <SubNavUl>
                        <SubNavLi>Menu1</SubNavLi>
                        <SubNavLi>Menu2</SubNavLi>
                        <SubNavLi>Menu3</SubNavLi>
                    </SubNavUl>
                </SubNavSection>
            </SubNavContatiner>
        </>
    );
};

export default SubNav;
