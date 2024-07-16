import axios from 'axios';
// choose between two env
const baseUrl = axios.create({ baseURL:`${process.env.REACT_APP_NODE_ENV=='dev'?process.env.REACT_APP_DEV_API:process.env.REACT_APP_PROD_API}`});

export default baseUrl;
