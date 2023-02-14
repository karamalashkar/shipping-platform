import "./style.css";

const Button=(props)=>{
    return(
        <button className="button" onClick={props.onClick} style={{backgroundColor: props.color}}>{props.text}</button>
    );
}

export default Button;