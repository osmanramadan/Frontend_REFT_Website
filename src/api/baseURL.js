import axios from 'axios';


const baseUrl = axios.create({ baseURL:"http://localhost:3004" });

export default baseUrl;
