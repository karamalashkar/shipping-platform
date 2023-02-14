import "./style.css";
import Input from "../components/Input";
import FormButton from "../components/FormButton";

const Login=()=>{
  return (
    <div className='form'>
      <div className='user-form'>
        <img src={'logo.png'} />
        <h1>Login</h1>
        <p style={{color: 'red'}}></p>
        <form>
          <Input type="email" text="Email" />
          <Input type="password" text="Password" />
          <FormButton text="LOGIN" />
          <p>Don't have an account? <a href="/register">Join Now</a></p>
        </form>
      </div>
    </div>
  )
}

export default Login;
