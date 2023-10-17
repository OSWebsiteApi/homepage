import React from "react";
import Header from "../Elements/Header";
import {Footer} from "../Elements/Footer";

import {Title1} from "../components/Titles";
import '../css/styles.css';

const NoPage = () => {
    return (
        <>
            <Header />
                <main className={"index"}>
                    <Title1 title={"404"} />
                </main>
            <Footer />
        </>
    )
};

export default NoPage;