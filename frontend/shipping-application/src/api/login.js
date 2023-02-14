import axios from "axios";

export const login = async (data)=>{
    const result = await axios.post('http://127.0.0.1:8000/api/login',data);
    return result.data;
}    