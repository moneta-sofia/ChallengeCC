import axios from 'axios';
const dotenv = require('dotenv').config();


const api = axios.create({
    baseURL:  process.env.BASE_URL + "/api" || 'http://localhost:5050/api',
    timeout: 5000,
})


api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        return Promise.reject(error.response?.data || { message: 'unknown error' });
    }
);

export default api;