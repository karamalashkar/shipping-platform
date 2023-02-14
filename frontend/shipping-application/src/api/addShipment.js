import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//add a new shipment
export const addShipment = async (data)=>{
    await axiosInstance(getToken()).post(`/shipment`,data);
}
