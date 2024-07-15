import axios from 'axios';

const baseUrl = axios.create({ baseURL:`${process.env.NODE_ENV=='dev'?process.env.REACT_APP_DEV_API:process.env.REACT_APP_PROD_API}`});

export default baseUrl;
