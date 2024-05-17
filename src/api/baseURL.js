import axios from 'axios';

const baseUrl = axios.create({baseURL:process.env.REACT_APP_API});
console.log(process.env.REACT_APP_code,process.env,'----------------------o------------------0--------------')

export default baseUrl;
