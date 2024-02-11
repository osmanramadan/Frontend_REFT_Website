import axios from 'axios';

const baseUrl = axios.create({ baseURL: 'http://localhost:3003' });

export default baseUrl;
