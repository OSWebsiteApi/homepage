import React from "react";
import { Outlet } from "react-router-dom";
import {Title1} from "../components/Titles";

const topNavigation = () => {
    return (
        <>
            <section className="header-section-total">
                <section className="header-section-left">
                    <section className="left">
                        <figure className="logoSmall">
                            <img src="/favicon.gif"/>
                        </figure>
                    </section>
                    <section className="right">
                    <Title1 title={"The OpenSource Project"} />
                    </section>
                </section>
                <section className="header-section-right">
                    <nav className="navigation">
                        <ul className={"topnav"}>
                            <li className="right">
                                <a href="/Register">register</a>
                            </li>
                        </ul>
                        <Outlet />
                    </nav>
                </section>
            </section>
        </>
    )
};

export default topNavigation;