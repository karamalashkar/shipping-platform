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
import { editShipment } from "../api/editShipment";
import { deleteShipment } from "../api/deleteShipment";

const Home=()=>{
    const [isOpenAdd,setOpenAdd]=useState(false)
    const [isOpenEdit,setOpenEdit]=useState('none')
    const [data,setData]=useState('')
    const [id,setId]=useState('')
    const [image,setImage]=useState('')
    const [waybill,setwaybill]=useState('')
    const [customerName,setCustomerName]=useState('')
    const [customerAddress,setCustomerAddress]=useState('')
    const [customerPhoneNumber,setCustomerPhoneNumber]=useState('')
    const [errorMessage,setErrorMessage]=useState('')
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
        setCustomerName(result.customer_name)
        setCustomerAddress(result.customer_address)
        setCustomerPhoneNumber(result.customer_phone_number)
        setOpenEdit('flex')
    }

    const edit=async(e)=>{
        e.preventDefault()
        if(!customerName || !customerAddress || !customerPhoneNumber){
            setErrorMessage('Enter all required fields')
            return null
        }

        const post={waybill, customerName, customerAddress, customerPhoneNumber, userID}

        if(!waybill){
            post.waybill=''
        }

        await editShipment(id,post);
        getShipmentInfo(id)
        shipment() 
    }

    const deleteShipmentInfo = async(id)=>{
        await deleteShipment(id);
        shipment()
    }

    const uploadImage = async(e)=>{
        const file=e.target.files[0]
        const base64=await convertBase64(file);
        setwaybill(base64)
    }

    //convert image to base64
    const convertBase64= (file)=>{
        return new Promise((resolve,reject)=>{
            const filReader=new FileReader();
            filReader.readAsDataURL(file);

            filReader.onload=()=>{
                resolve(filReader.result);
            }
            filReader.onerror=(error)=>{
                reject(error);
            }
        })
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
                                ondelete={()=>deleteShipmentInfo(data.id)}
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
                <p style={{margin: '10px 0', color: 'red'}}>{errorMessage}</p>
                <form onSubmit={edit}>
                    <InputFile setValue={uploadImage} />
                    <Input text="Customer Name" default={customerName} setValue={setCustomerName} setError={setErrorMessage} />
                    <Input text="Customer Address" default={customerAddress} setValue={setCustomerAddress} setError={setErrorMessage} />
                    <Input text="Customer Phone Number" default={customerPhoneNumber} setValue={setCustomerPhoneNumber} setError={setErrorMessage} />
                    <FormButton text="Save" />
                </form>
            </div>
        </>
    );
}

export default Home;