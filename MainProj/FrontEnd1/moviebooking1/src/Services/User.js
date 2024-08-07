import axios from "axios";
import config from "../config";

export async function userLogin(email, password){
    const body = {
        email, password
    }
    const response = await axios.post(`${config.url}/users/signin`,body);
    return response.data;
}

export async function userRegister(firstName, lastName, email, password){
    const body = {
        firstName, lastName, email, password
    }
    const response = await axios.post(`${config.url}/users/signup`, body)
    return response.data
}