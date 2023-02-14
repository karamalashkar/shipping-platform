import "./style.css";
import { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Navbar from "../components/Navbar";
import ShipmentCard from "../components/ShipmentCard";
import Button from "../components/Button";
import { getShipment } from "../api/getShipment";
import AddShipment from "../components/AddShipment";
import InputFile from "../components/InputFile";
import Input from "../components/Input";
import FormButton from "../components/FormButton";

const Home=()=>{
    const [isOpenAdd,setOpenAdd]=useState(false)
    const [isOpenEdit,setOpenEdit]=useState('none')
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

            <div className="edit-popup" style={{display: isOpenEdit}}>
                <div className="close">
                    <button onClick={()=>setOpenEdit('none')}><AiFillCloseCircle/></button>
                </div>
                <img src={'logo.png'} />
                <p style={{margin: '10px 0', color: 'red'}}></p>
                <form>
                    <InputFile />
                    <Input text="Customer Name" />
                    <Input text="Customer Address" />
                    <Input text="Customer Phone Number" />
                    <FormButton text="Save" />
                </form>
            </div>
        </>
    );
}

export default Home;