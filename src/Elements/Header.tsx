import React from "react";
import AboveNavigation from "./AboveBanner";
import TopNavigation from "./TopNavigation";

const header = () => {
    return (
        <header className="header-section">
            <AboveNavigation />
            <TopNavigation />
        </header>
    )
}

export default header;