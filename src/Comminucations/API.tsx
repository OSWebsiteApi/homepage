import * as path from "path";

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

export async function apiLoginPostRequest(content: any, urlpath: string) {
    const urlPlusPath = process.env.API_URL || "stagingapi.game-x.nl" + urlpath

    const response = await fetch(urlPlusPath, {
        method: 'POST',
        body: JSON.stringify({
            email: content.Email,
            password: content.Password
        }),
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
    });
    if (!response.ok) { /* Handle */
    }
    // If you care about a response:
    if (response.body !== null) {
        // body is ReadableStream<Uint8Array>
        // parse as needed, e.g. reading directly, or
        console.log(response.body)
        return response.body
    }
}

export async function apiRegisterPostRequest(content: any, urlpath: string) {
    const urlPlusPath = process.env.API_MYSQL_URI || "stagingapi.game-x.nl" + urlpath
    const response = await fetch(urlPlusPath, {
        method: 'POST',
        body: JSON.stringify({
            email: content.Email,
            password: content.Password,
            lname: content.lname,
            fname: content.fname
        }),
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
    });
    if (!response.ok) { /* Handle */
    }
    // If you care about a response:
    if (response.body !== null) {
        // body is ReadableStream<Uint8Array>
        // parse as needed, e.g. reading directly, or
        console.log(response.body)
        return response.body

    }
}