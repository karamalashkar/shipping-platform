import { AiFillCamera } from "react-icons/ai";

const InputFile=(props)=>{
    return(
        <label htmlFor="file">
            <AiFillCamera /> Choose a Photo
            <input type="file" className="file" id="file" accept="png,jpg" 
            onChange={e => props.setValue(e)} />
        </label>
    );
}

export default InputFile;