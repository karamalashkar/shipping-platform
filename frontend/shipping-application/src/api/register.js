import axios from 'axios';

//add a new user
export const register = async (data)=>{
    const result = await axios.post('http://127.0.0.1:8000/api/register',data);
    return result.data.status;
}
