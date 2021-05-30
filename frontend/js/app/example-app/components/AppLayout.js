import React from "react";

import Navigation from "./Navigation/index";
import BodySection from "./BodySection/BodySection";
import FooterSection from "./FooterSection/FooterSection";

const AppLayout = ({ children }) => {
    return (
        <>
            <Navigation />
            <BodySection />
            <FooterSection />
        </>
    );
};

export default AppLayout;
