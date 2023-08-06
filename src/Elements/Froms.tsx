import React from "react";
import {useState} from "react";
import {apiLoginPostRequest, apiRegisterPostRequest} from "../Comminucations/API";
import {Title1} from "../components/Titles";

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
                pattern="^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$"
                value={inputs.email}
                onChange={handleChange}
            /><br/><br/>
            <label>Password:</label>
            <input
                className="inputleft"
                type="password"
                name='password'
                value={inputs.password}
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
                        pattern="^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                    <br/>
                    <label>Password:</label>
                    <input
                        className="inputleft"
                        type="password"
                        name="password"
                        value={inputs.password}
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


export function LogoutForm() {
    const handleSubmit  = (event:any) => {
        event.preventDefault();
       sessionStorage.removeItem("Api-Key")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="formcontainer">
                <br/>
                <Title1 title="Are you sure" />
                    <br/>
                <input type="submit"/>
                <br/><br/>
            </form>
        </>
    )
}

