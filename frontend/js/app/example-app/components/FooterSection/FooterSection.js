import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const FooterContainer = styled.div`
    border: 1px solid red;
`;

const FooterSection = () => {
    return (
        <>
            <FooterContainer>
                <span>FooterItem</span>
                <br />
                <div>
                    <Link href="http://dev-won.com">
                        <a>dev-won</a>
                    </Link>
                </div>
            </FooterContainer>
        </>
    );
};

export default FooterSection;
