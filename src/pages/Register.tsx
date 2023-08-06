import React from "react";
import Header from "../Elements/Header";
import {RegisterForm} from "../Elements/Froms";
import {Footer} from "../Elements/Footer";

import {Title1} from "../components/Titles";

import '../css/styles.css';

const Register = () => {
    return (
        <>
            <Header />
                <main className={"index"}>
                    <div className="indexCenter">
                        <Title1 title={"Register"} /><br/>
                        <RegisterForm />
                    </div>
                </main>
            <Footer />
        </>
    )
};

export default Register;