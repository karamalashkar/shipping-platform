import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//edit shipment
export const editShipment = async (id,data)=>{
    await axiosInstance(getToken()).post(`/shipment/${id}`,data);
}
