import React, {useState} from "react";
import BottomNavigation from "./BottomNavigation";
import {Title3} from "../components/Titles";

export function Footer() {
    const [selectedLanguage, setSelectedLanguage]: [string, ((value: (((prevState: string) => string) | string)) => void)] = useState('en'); // Default language is set to English ('en')

    const handleLanguageChange = (event: any) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <footer>
            <section className="footer-container">
                <section className="footer-container-stack">
                    <section className="footer-container-top">
                        <figure className="logoSmall">
                            <img src="/favicon.gif"/>
                        </figure>
                        <br/>
                        <Title3 title={"T.O.P."} />
                        <br/>
                    </section >
                    <section className="footer-container-bottom">
                        <section className="language-changer">
                            <select value={selectedLanguage} onChange={handleLanguageChange}>
                                <option value="en">English</option>
                                <option value="fr">French</option>
                                <option value="es">Spanish</option>
                                {/* Add more language options here as needed */}
                            </select>
                        </section>
                    </section>
                </section>
                <BottomNavigation />
            </section>
            <section className="footer-bottom">
                <p>&copy; 2023 The OpenSourceProject All rights reserved.</p>
            </section>
        </footer>
    )
}