import React from "react";
import Header from "../../Elements/Header";
import {LoginFrom} from "../../Elements/Froms";
import {Footer} from "../../Elements/Footer";

import {Title1} from "../../components/Titles";

import '../../css/styles.css';

const Login = () => {
    return (
        <>
            <Header />
            <main className={"index"}>
                <section className="indexCenter">
                    <Title1 title={"Login"} /><br/>
                    <LoginFrom />
                </section>
            </main>
            <Footer />
        </>
    )
};

export default Login;