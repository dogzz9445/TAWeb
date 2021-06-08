import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import SubNav from "./SubNav";

const NavSection = styled.div`
    position: relative;
    width: 100%;
`;
const NavContainer = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
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
    width: 100%;
    text-align: center;
    display: flex;
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
const ToggleSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const ToggleMenu = styled.div`
    bottom: 0px;
    width: 100%;
`;

const Navigation = () => {
    const [openTab, setOpenTab] = useState("");
    const openToggle = useCallback((e) => {
        setOpenTab((prev) => !prev);
    }, []);
    return (
        <>
            <NavSection>
                <NavContainer>
                    <MenuItem>
                        <ToggleSection>
                            <Link href="/">
                                <a onClick={openToggle}>Item1</a>
                            </Link>
                            {openTab && (
                                <ToggleMenu>
                                    <SubNav />
                                </ToggleMenu>
                            )}
                        </ToggleSection>
                        <ToggleSection>
                            <Link href="/Contact">
                                <a>Item2</a>
                            </Link>
                        </ToggleSection>
                        <ToggleSection>
                            <Link href="http://youtube.com">
                                <a>Item3</a>
                            </Link>
                        </ToggleSection>
                        <ToggleSection>
                            <Link href="http://www.dev-won.com">
                                <a>Item4</a>
                            </Link>
                        </ToggleSection>
                    </MenuItem>
                </NavContainer>
            </NavSection>
        </>
    );
};

export default Navigation;
