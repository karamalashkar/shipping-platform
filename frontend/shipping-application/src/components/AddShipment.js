import "./style.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Input from "./Input";
import FormButton from "./FormButton";
import InputFile from "./InputFile";

const AddShipment=(props)=>{
    if(!props.open){
        return null
    }
    return(
        <div className="add-popup">
            <div className="close">
                <button onClick={props.onClose}><AiFillCloseCircle/></button>
            </div>
            <h1>Add Shipment</h1>
            <p style={{margin: '10px 0', color: 'red'}}></p>
            <form className="add-form">
                <InputFile />
                <Input type="text" text="Customer Name" />
                <Input type="text" text="Customer Address" />
                <Input type="text" text="Customer Phone Number" />
                <FormButton text={'Save'} />
            </form>
        </div>
    );
}

export default AddShipment;