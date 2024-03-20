import axios from "axios";

// Backend Server
const baseURL = 'http://127.0.0.1:8000/'
export const AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
});