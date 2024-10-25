import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8e879bde60c94c2598eb3ef0b9eaee2b'
    }
});