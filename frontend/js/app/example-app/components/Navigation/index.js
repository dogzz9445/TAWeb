import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const NavContainer = styled.div`
    border: 1px solid red;
    widht: 100%;
    display: flex;
    height: 50px;
    align-items: center;
`;
const MenuLogo = styled.div`
    border: 1px solid blue;
    width: 30%;
    font-size: 20pt;
    @media (maxw-width: 360px) {
        font-size: 14pt;
        width: 20%;
    }
`;
const MenuItem = styled.div`
    border: 1px solid green;
    width: 70%;
    text-align: right;
    & a {
        margin: 10px;
        font-size: 20pt;
    }
    @media (max-width: 360px) {
        width: 80%;
        & a {
            margin: 4px;
            font-size: 14pt;
        }
    }
`;

const Navigation = () => {
    return (
        <>
            <NavContainer>
                <MenuLogo>logo</MenuLogo>
                <MenuItem>
                    <Link href="http://naver.com">
                        <a>Item1</a>
                    </Link>
                    <Link href="http://google.com">
                        <a>Item2</a>
                    </Link>
                    <Link href="http://youtube.com">
                        <a>Item3</a>
                    </Link>
                    <Link href="http://www.dev-won.com">
                        <a>Item4</a>
                    </Link>
                </MenuItem>
            </NavContainer>
        </>
    );
};

export default Navigation;
