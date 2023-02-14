import "./style.css";
import Input from '../components/Input';
import FormButton from '../components/FormButton';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { passwordValidation } from '../utilities/Validator';
import { register } from "../api/register";

const Register =()=>{
  const navigate=useNavigate()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [errorMessage,setErrorMessage]=useState('')

  const signUp = async(e) =>{
      e.preventDefault()
      if(!name || !email || !password){
          setErrorMessage('Enter all required fields')
          return null
      }

      const matchPassword=passwordValidation(password);

      if(matchPassword){
          const post={name,email,password}
          const response=await register(post)
          if(response=="success"){
              navigate("/login")
          }else{
              setErrorMessage('Email already exist')
          }
      }else{
          setErrorMessage('Enter a strong password')
      }
  }
      
  return (
    <div className='form'>
      <div className='user-form'>
        <img src={'logo.png'} />
        <h1>REGISTER</h1>
        <p style={{color: 'red'}}>{errorMessage}</p>
        <form onSubmit={signUp}>
          <Input type="text" text="Name" setValue={setName} setError={setErrorMessage} />
          <Input type="email" text="Email" setValue={setEmail} setError={setErrorMessage} />
          <Input type="password" text="Password" setValue={setPassword} setError={setErrorMessage} />
          <FormButton text="REGISTER" />
        </form>
      </div>
    </div>
  )
}

export default Register;
