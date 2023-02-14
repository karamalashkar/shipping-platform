import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

export const getShipment = async (id)=>{
    const result = await axiosInstance(getToken()).get(`/shipments/${id}`);
    return result.data.data;
}
