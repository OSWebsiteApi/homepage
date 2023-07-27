import NewButton from "../components/NewButton";
import React from "react";
import Menu from "./menu";

export default function Home() {
    return (
        <main>
            <h1>Home</h1>
            <Menu />
            <NewButton />
        </main>
    )
}