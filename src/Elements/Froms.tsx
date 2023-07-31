import React from "react";
import {useState} from "react";
import {apiLoginPostRequest, apiRegisterPostRequest} from "../Comminucations/API";

export function LoginFrom() {
    const [inputs, setInputs] = useState({
        Email: undefined,
        Password: undefined
    });

    const handleChange = (event:any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit  = (event:any) => {
        event.preventDefault();
        apiLoginPostRequest([inputs.Email, inputs.Password] ,"/login")
    }

    return (
        <>
                <form onSubmit={handleSubmit} className="formcontainer">
                    <label> E-mail:</label>
                    <input
                        className="inputleft"
                        type="email"
                        name="Email"
                        value={inputs.Email}
                        onChange={handleChange}
                    /><br/><br/>
                    <label>Password:</label>
                    <input
                        className="inputleft"
                        type="password"
                        name="Password"
                        value={inputs.Password}
                        onChange={handleChange}
                    /><br/><br/>
                    <input type="submit" />

                </form>
            <br/>
        <div className="NotYetRegisterd">
            <p>Not yet registerd:</p>
            <a href="/Register">Register</a>
        </div>

        </>
    )
}

export function RegisterForm() {
    const [inputs, setInputs] = useState({
        fname: undefined,
        lname: undefined,
        email: undefined,
        Password: undefined,
        RPassword: undefined,
    });

    const handleChange = (event:any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit  = (event:any) => {
        event.preventDefault();

            apiRegisterPostRequest([inputs.email, inputs.Password, inputs.fname, inputs.lname],"/register")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="formcontainer">
                    <label>First name:</label>
                    <input
                        className="inputleft"
                        type="text"
                        name="fname"
                        value={inputs.fname}
                        onChange={handleChange}
                    /><br/>
                    <label>Last name:</label>
                    <input
                        className="inputleft"
                        type="text"
                        name="lname"
                        value={inputs.lname}
                        onChange={handleChange}
                    />
                    <br/>
                    <label>E-mail:</label>
                    <input
                        className="inputleft"
                        type="email"
                        name="email"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                    <br/>
                    <label>Password:</label>
                    <input
                        className="inputleft"
                        type="password"
                        name="Password"
                        value={inputs.Password}
                        onChange={handleChange}
                    />
                    <br/>
                    <label>Retype Password:</label>
                    <input
                        className="inputleft"
                        type="password"
                        name="RPassword"
                        value={inputs.RPassword}
                        onChange={handleChange}
                    />
                    <br/><br/>
                    <input type="submit"/>
                    <br/><br/>
                </form>
            <div className="AlreadyRegisterd">
                <p>Already register:</p>
                <a href="/Login">Login</a>
            </div>
        </>
    )
}

