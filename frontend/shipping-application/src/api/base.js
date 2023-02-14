import axios from 'axios';

//define the base url to be used
const baseURL = 'http://127.0.0.1:8000/api';

export default(token)=>{
    return axios.create(
        {
            baseURL: baseURL,
            headers:{
                'Authorization':  `Bearer ${token}`,
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Headers': "*",
                'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE",
                'Access-Control-Allow-Credentials': true,
                'Content-Type': "multipart/form-data",
                'Accept': "application/json",
            }
        }
    )}        