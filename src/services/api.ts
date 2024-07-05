import axios from 'axios';
import { getUserLocalStorage } from '../AuthProvider/utils';

export const api = axios.create({
    baseURL: 'http://192.168.0.17:8880',
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