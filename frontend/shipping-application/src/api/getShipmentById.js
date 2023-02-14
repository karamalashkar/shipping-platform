import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//get shipment by id
export const getShipmentById = async (id)=>{
    const result = await axiosInstance(getToken()).get(`/shipment/${id}`);
    return result.data.data;
}
