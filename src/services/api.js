import axios from 'axios';

const api = axios.create({
    baseURL: 'http:172.18.210.165:3333',
});

export default api;