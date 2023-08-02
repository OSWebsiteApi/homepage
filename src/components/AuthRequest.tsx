import * as path from "path";
import {redirect} from "react-router-dom";

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

export async function authRequest(){
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL.
    const apiEndpoint = process.env.API_URL + '/authtest';
    // If authenticated, make the API call to check authorization.
    try{
        const response = await fetch(apiEndpoint, {
            method: 'GET',
        })
        if (!response.ok) {
            // If the response status is not 200 (OK), handle unauthorized case.
            if (response.status === 401) {
                // Redirect the user to another website for unauthorized access.
                redirect(process.env.HOME_URL + "/login")
            } else {
                // Handle other error cases.
                throw new Error('Network response was not OK');
            }
        }
    } catch (error) {
        console.error('error',error)
        return error
    }
}

export default authRequest
