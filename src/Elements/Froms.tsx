import React from "react";
import {useState} from "react";
import {apiLoginPostRequest, apiRegisterPostRequest} from "../Comminucations/API";

export function LoginFrom() {
    const [inputs, setInputs] = useState({
        email: undefined,
        password: undefined
    });

    const handleChange = (event:any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit  = (event:any) => {
        event.preventDefault();
        if (!apiLoginPostRequest(inputs ,"/login") ){
            alert("Error, Try again")
        }

    }

    return (
    <>
        <form onSubmit={handleSubmit} className="formcontainer">
            <label> E-mail:</label>
            <input
                className="inputleft"
                type="email"
                name="email"
                placeholder="excemple@company.com"
                value={inputs.email}
                onChange={handleChange}
            /><br/><br/>
            <label>Password:</label>
            <input
                className="inputleft"
                type="password"
                name='password'
                placeholder="K1djfi/.Ion"
                value={inputs.password}
                onChange={handleChange}
            /><br/><br/>
            <input type="submit" />

            </form>
            <br/>
        <section className="NotYetRegisterd">
            <p>Not yet registerd:</p>
            <a href="/Register">Register</a>
        </section>

        </>
    )
}

export function RegisterForm() {
    const [inputs, setInputs] = useState({
        fname: undefined,
        lname: undefined,
        email: undefined,
        password: undefined,
    });

    const handleChange = (event:any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit  = (event:any) => {
        event.preventDefault();
        if(!apiRegisterPostRequest(inputs,"/register")){
            alert("Error, Try again")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="formcontainer">
                    <label>First name:</label>
                    <input
                        className="inputleft"
                        type="text"
                        name="fname"
                        placeholder="Tomas"
                        value={inputs.fname}
                        onChange={handleChange}
                    /><br/>
                    <label>Last name:</label>
                    <input
                        className="inputleft"
                        type="text"
                        name="lname"
                        placeholder="Van Heijn"
                        value={inputs.lname}
                        onChange={handleChange}
                    />
                    <br/>
                    <label>E-mail:</label>
                    <input
                        className="inputleft"
                        type="email"
                        name="email"
                        placeholder="excemple@company.com"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                    <br/>
                    <label>Password:</label>
                    <input
                        className="inputleft"
                        type="password"
                        name="password"
                        placeholder="K1djfi/.Ion"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                    <br/><br/>
                    <input type="submit"/>
                    <br/><br/>
                </form>
            <section className="AlreadyRegisterd">
                <p>Already register:</p>
                <a href="/Login">Login</a>
            </section>
        </>
    )
}


export function LogoutForm() {
    const handleSubmit  = (event:any) => {
        event.preventDefault();
       sessionStorage.removeItem("Api-Key")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="formcontainer">
                <br/>
                <p>Are you sure</p>
                    <br/>
                <input type="submit"/>
                <br/><br/>
            </form>
        </>
    )
}

