import axios from 'axios';

const client = axios.create({
    baseURL: (() => {
        if (typeof window !== 'undefined') {
            return '';
        }
        return process.env.SERVER_HOST || `http://localhost:${process.env.PORT}`;
    })(),
});

export default client;
