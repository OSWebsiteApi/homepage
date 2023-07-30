import React from "react";
import {useState} from "react";



export function LoginFrom() {
    const [inputs, setInputs] = useState({
        email: undefined,
        Password: undefined
    });

    const handleChange = (event:any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit  = (event:any) => {
        event.preventDefault();
        console.log(inputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> E-mail:
                <br />
            <input
                type="email"
                name="emial"
                value={inputs.email || ""}
                onChange={handleChange}
            />
            </label>
            <br/>
            <label>Password:
                <br />
            <input
                type="password"
                name="Password"
                value={inputs.Password || ""}
                onChange={handleChange}
            />
            </label>
            <br/><br/>
            <input type="submit" />
        </form>
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
        console.log(inputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>First name:
            <input
                type="text"
                name="fname"
                value={inputs.fname || ""}
                onChange={handleChange}
            /></label><br/>
            <label>Last name:
            <input
                type="text"
                name="lname"
                value={inputs.lname || ""}
                onChange={handleChange}
            />
            </label><br/>
            <label>E-mail:
            <input
                type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
            />
            </label><br/>
            <label>Password:
            <input
                type="password"
                name="Password"
                value={inputs.Password || ""}
                onChange={handleChange}
            />
            </label><br/>
            <label>Retype Password:
            <input
                type="password"
                name="RPassword"
                value={inputs.RPassword || ""}
                onChange={handleChange}
            /></label><br/>
            <input type="submit"/>
        </form>
    )
}

