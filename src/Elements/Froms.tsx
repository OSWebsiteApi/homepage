import React from "react";

export function LoginFrom() {
    return (
        <form>
            <label htmlFor="e-mail">E-mail:</label><br/>
            <input type="email" id="e-mail" name="e-mail" value="Excemple@oFyreblox.com"/><br/>
            <label htmlFor="Password">Password:</label><br/>
            <input type="text" id="Password" name="Password" value="Doe"/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}


export function RegisterForm() {
    return (
        <form>
            <label htmlFor="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname" value="John"/><br/>
            <label htmlFor="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname" value="Doe"/><br/>
            <label htmlFor="e-mail">E-mail:</label><br/>
            <input type="email" id="e-mail" name="e-mail" value="Excemple@oFyreblox.com"/><br/>
            <label htmlFor="Password">Password:</label><br/>
            <input type="password" id="Password" name="Password" value="Doe"/><br/>
            <label htmlFor="RPassword">Retype Password:</label><br/>
            <input type="password" id="RPassword" name="RPassword" value="Doe"/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

