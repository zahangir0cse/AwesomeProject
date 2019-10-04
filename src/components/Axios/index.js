import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://dummy.restapiexample.com/'
});

export default instance;