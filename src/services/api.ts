import axios from 'axios';
import { getUserLocalStorage } from '../AuthProvider/utils';

export const api = axios.create({
    // baseURL: 'http://localhost:8890',
    baseURL: 'http://52.67.34.79:8890',
    responseType: 'json',
})

api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage();
        config.headers.Authorization = user?.token;

        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api;