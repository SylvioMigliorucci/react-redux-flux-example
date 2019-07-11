import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://www.mocky.io/v2/5d2775e6320000ff2a71bb65'
})

export default api;
