import "./style.css";
import Navbar from "../components/Navbar";
import ShipmentCard from "../components/ShipmentCard";
import Button from "../components/Button";

const Home=()=>{
    return(
        <div className="home">
            <Navbar />
            <div className="add-section">
                <Button text="Add Shipment" color={'#34495e'} />
            </div>
            <div className="shipments">
                <ShipmentCard />
            </div>
        </div>
    );
}

export default Home;