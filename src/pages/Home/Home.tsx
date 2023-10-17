import React from "react";
import Header from "../../Elements/Header";
import {Footer} from "../../Elements/Footer";

import {Title1} from "../../components/Titles";
import NewButton from "../../components/NewButton";
import '../../css/styles.css';


export default function Home() {
    return (
        <>
            <Header />
                <main className={"index"}>
                        <section className="index_Center">
                            <section>
                                <Title1 title={"HomePage"}/>
                            </section>
                            <section>
                                <NewButton />
                            </section>
                        </section>
                </main>
            <Footer />
        </>
    )
}