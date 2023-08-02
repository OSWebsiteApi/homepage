import React from "react";
import Header from "../Elements/Header";
import {Footer} from "../Elements/Footer";

import {Title1} from "../components/Titles";

import '../css/styles.css';
import LeftNavigation from "../Elements/LeftNavigation";

const Settings = () => {
    return (
        <>
            <Header />
                <main className={"index"}>
                    <LeftNavigation/>
                    <div className="indexCenter">
                        <Title1 title={"Settings"} />
                    </div>
                </main>
            <Footer />
        </>
    )
};

export default Settings;