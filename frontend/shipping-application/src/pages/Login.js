import "./style.css";
import { useState } from "react";
import Input from "../components/Input";
import FormButton from "../components/FormButton";
import { login } from "../api/login";
import { useNavigate } from 'react-router-dom';

const Login=()=>{
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [errorMessage, setErrorMessage]=useState('')

  const signIn = async(e) =>{
      e.preventDefault()
      if(!email || !password){
          setErrorMessage('Enter all required fields')
          return null
      }

      const post={email,password}
      const response=await login(post)
      if(response.status == 'success'){
          localStorage.setItem('id',response.user.id)
          localStorage.setItem('token',response.token)
          navigate("/home")
      }
      else{
          setErrorMessage('Invalid Credential')
      }
  }

  return (
    <div className='form'>
      <div className='user-form'>
        <img src={'logo.png'} />
        <h1>LOGIN</h1>
        <p style={{color: 'red'}}>{errorMessage}</p>
        <form onSubmit={signIn}>
          <Input type="email" text="Email" setValue={setEmail} setError={setErrorMessage} />
          <Input type="password" text="Password" setValue={setPassword} setError={setErrorMessage} />
          <FormButton text="LOGIN" />
          <p>Don't have an account? <a href="/register">Join Now</a></p>
        </form>
      </div>
    </div>
  )
}

export default Login;
