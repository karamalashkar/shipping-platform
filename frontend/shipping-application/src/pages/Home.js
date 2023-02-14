import "./style.css";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ShipmentCard from "../components/ShipmentCard";
import Button from "../components/Button";
import { getShipment } from "../api/getShipment";
import AddShipment from "../components/AddShipment";

const Home=()=>{
    const [isOpenAdd,setOpenAdd]=useState(false)
    const [data,setData]=useState('')
    const userID=localStorage.getItem('id');

    const shipment = async ()=>{
        const result=await getShipment(userID);
        setData(result)
    }

    useEffect(()=>{
        shipment()
    },[])

    return(
        <>
            <div className="home">
                <Navbar />
                <div className="add-section">
                    <Button text="Add Shipment" color={'#34495e'} onClick={()=>setOpenAdd(true)} />
                </div>
                <div className="shipments">
                    {
                        Object.values(data).map( (data) => {
                            return(
                                <ShipmentCard key={data.id}
                                image={data.waybill}
                                name={data.customer_name}
                                address={data.customer_address}
                                phone={data.customer_phone_number} />
                            );
                        })
                    }
                </div>
            </div>

            <AddShipment open={isOpenAdd} onClose={()=>setOpenAdd(false)} />
        </>
    );
}

export default Home;