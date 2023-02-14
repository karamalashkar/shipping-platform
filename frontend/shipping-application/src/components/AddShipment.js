import "./style.css";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Input from "./Input";
import FormButton from "./FormButton";
import InputFile from "./InputFile";
import { addShipment } from "../api/addShipment";

const AddShipment=(props)=>{
    const [waybill,setwaybill]=useState('')
    const [customerName,setCustomerName]=useState('')
    const [customerAddress,setCustomerAddress]=useState('')
    const [customerPhoneNumber,setCustomerPhoneNumber]=useState('')
    const [errorMessage,setErrorMessage]=useState('')
    const userID=localStorage.getItem('id');

    const add = async(e) =>{
        e.preventDefault()
        if(!waybill || !customerName || !customerAddress || !customerPhoneNumber){
            setErrorMessage('Enter all required fields')
            return null
        }

        const post={waybill, customerName, customerAddress, customerPhoneNumber,userID}

        await addShipment(post);
        window.location.reload() 
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

    if(!props.open){
        return null
    }
    return(
        <div className="add-popup">
            <div className="close">
                <button onClick={props.onClose}><AiFillCloseCircle/></button>
            </div>
            <h1>Add Shipment</h1>
            <p style={{margin: '10px 0', color: 'red'}}>{errorMessage}</p>
            <form onSubmit={add} className="add-form">
                <InputFile setValue={uploadImage} />
                <Input type="text" text="Customer Name" setValue={setCustomerName} setError={setErrorMessage} />
                <Input type="text" text="Customer Address" setValue={setCustomerAddress} setError={setErrorMessage} />
                <Input type="text" text="Customer Phone Number" setValue={setCustomerPhoneNumber} setError={setErrorMessage} />
                <FormButton text={'Save'} />
            </form>
        </div>
    );
}

export default AddShipment;