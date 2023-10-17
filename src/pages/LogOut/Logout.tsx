import React from "react";
import Header from "../../Elements/Header";
import {LogoutForm} from "../../Elements/Froms";
import {Footer} from "../../Elements/Footer";

import {Title1} from "../../components/Titles";

import '../../css/styles.css';

const Logout = () => {
    return (
        <>
            <Header />
            <main className={"index"}>
                <section className="indexCenter">
                    <Title1 title={"Logout"} /><br/>
                    <LogoutForm />
                </section>
            </main>
            <Footer />
        </>
    )
};

export default Logout;