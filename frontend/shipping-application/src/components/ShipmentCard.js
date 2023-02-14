import "./style.css";
import Button from "./Button";

const ShipmentCard=(props)=>{
    return(
        <div className="card">
            <div className="card-image">
                <img src={`http://127.0.0.1:8000/assets/${props.image}`} />
            </div>
            <div className="card-info">
                <h2>{props.name}</h2>
                <h3>{props.phone}</h3>
                <p>{props.address}</p>
                <div className="card-button">
                    <Button text="Edit" onClick={props.onedit} color={'#34495e'} />
                    <Button text="Delete" onClick={props.ondelete} color={'red'} />
                </div>
            </div>
        </div>
    );
}

export default ShipmentCard;