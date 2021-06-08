import React from "react";
import styled from "@emotion/styled";

import AppLayout from "./Components/AppLayout";

const PageTestSection = styled.div`
    border: 1px solid red;
    margin-top: 100px;
`;

const Contact = () => {
    return (
        <>
            <AppLayout>
                <PageTestSection>
                    <div>asd</div>
                </PageTestSection>
            </AppLayout>
        </>
    );
};

export default Contact;
