import React from 'react';
import "./style.css";

const Input=(props)=> {
  return (
    <input type={props.type}
    defaultValue={props.default} 
    placeholder={props.text}
    onChange={e => props.setValue(e.target.value)}
    onFocus={() => props.setError('')} 
    className="input"/>
  )
}

export default Input;