import React from "react";
import Header from "../Elements/Header";
import {Footer} from "../Elements/Footer";

import {Title1} from "../components/Titles";
import NewButton from "../components/NewButton";
import '../css/styles.css';

export default function Home() {
    return (
        <>
            <Header />
                <main className={"index"}>
                    <div>
                    <Title1 title={"HomePage"}/>
                    </div>
                    <div>
                    <NewButton />
                    </div>
                </main>
            <Footer />
        </>
    )
}