import "./style.css";

const Navbar=(props)=>{
    return(
        <div className="navbar">
            <div className="navbar-part navbar-left">
                <img src={'logo.png'} />
            </div>
            <div className="navbar-part navbar-right">
                <button onClick={props.onClick}>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;