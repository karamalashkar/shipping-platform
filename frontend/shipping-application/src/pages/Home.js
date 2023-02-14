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
import { getShipmentById } from "../api/getShipmentById";

const Home=()=>{
    const [isOpenAdd,setOpenAdd]=useState(false)
    const [isOpenEdit,setOpenEdit]=useState('none')
    const [data,setData]=useState('')
    const [id,setId]=useState('')
    const [image,setImage]=useState('')
    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [phone,setPhone]=useState('')
    const userID=localStorage.getItem('id');

    const shipment = async ()=>{
        const result=await getShipment(userID);
        setData(result)
    }

    useEffect(()=>{
        shipment()
    },[])

    const getShipmentInfo=async(id)=>{
        const result=await getShipmentById(id);
        setId(result.id)
        setImage(result.waybill)
        setName(result.customer_name)
        setAddress(result.customer_address)
        setPhone(result.customer_phone_number)
        setOpenEdit('flex')
    }

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
                                phone={data.customer_phone_number} 
                                onedit={()=>getShipmentInfo(data.id)} />
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
                <img src={image?`http://127.0.0.1:8000/assets/${image}`:'logo.png'} />
                <p style={{margin: '10px 0', color: 'red'}}></p>
                <form>
                    <InputFile />
                    <Input text="Customer Name" default={name} />
                    <Input text="Customer Address" default={address} />
                    <Input text="Customer Phone Number" default={phone} />
                    <FormButton text="Save" />
                </form>
            </div>
        </>
    );
}

export default Home;