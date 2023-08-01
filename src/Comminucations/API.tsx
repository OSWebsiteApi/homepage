import * as path from "path";
import {redirect} from "react-router-dom";

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

export async function apiLoginPostRequest(content: any, urlpath: string) {
    const urlPlusPath = process.env.API_URL || "https://stagingapi.game-x.nl" + urlpath
    const JsonPayload = JSON.stringify({
        email: content.email,
        password: content.password,
    })
    try {
    const response = await fetch(urlPlusPath, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JsonPayload,
    })
        const data = await response.json();
        sessionStorage.setItem("Api-Key",data.token)
        redirect( process.env.FRONTEND_URL || "https://stagingfrontend.game-x.nl")
    } catch (error) {
        console.error('Error:', error);
        return error
    }
}

export async function apiRegisterPostRequest(content: any, urlpath: string) {
    const urlPlusPath = process.env.API_MYSQL_URI || "stagingapi.game-x.nl" + urlpath
    const JsonPayload = JSON.stringify({
        email: content.email,
        password: content.password,
        lname: content.lname,
        fname: content.fname
    })
    try {
        const response = await fetch(encodeURI(urlPlusPath), {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JsonPayload,
        })
        const data = await response.json();
        sessionStorage.setItem("Api-Key",data.token)
        sessionStorage.setItem("Api-Key",data.token)
        redirect( process.env.FRONTEND_URL || "https://stagingfrontend.game-x.nl")
    } catch (error) {
        console.error('Error:', error);
        return error
    }
}