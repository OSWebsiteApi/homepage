import React from "react";
import Header from "../Elements/Header";
import {LoginFrom} from "../Elements/Froms";
import {Footer} from "../Elements/Footer";

import {Title1} from "../components/Titles";

import '../css/styles.css';

const Login = () => {
    return (
        <>
            <Header />
            <main className={"index"}>
                <Title1 title={"Login"} />
                <LoginFrom />
            </main>
            <Footer />
        </>
    )
};

export default Login;