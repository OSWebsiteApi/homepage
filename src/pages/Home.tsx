import React from "react";
import Header from "../Elements/Header";
import {Footer} from "../Elements/Footer";
import LeftNavigation from "../Elements/LeftNavigation";


import {Title1} from "../components/Titles";
import NewButton from "../components/NewButton";
import '../css/styles.css';


export default function Home() {
    return (
        <>
            <Header />
                <main className={"index"}>
                    <LeftNavigation/>
                        <div className="index_Center">
                            <div>
                                <Title1 title={"HomePage"}/>
                            </div>
                            <div>
                                <NewButton />
                            </div>
                        </div>
                </main>
            <Footer />
        </>
    )
}