import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

export const deleteShipment = async (id)=>{
    const result = await axiosInstance(getToken()).delete(`/shipment/${id}`);
    return result;
}
