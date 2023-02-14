import "./style.css";
import Input from '../components/Input';
import FormButton from '../components/FormButton';

const Register =()=>{
  return (
    <div className='form'>
      <div className='user-form'>
        <img src={'logo.png'} />
        <h1>REGISTER</h1>
        <p style={{color: 'red'}}></p>
        <form>
          <Input type="text" text="Name" />
          <Input type="email" text="Email" />
          <Input type="password" text="Password" />
          <FormButton text="REGISTER" />
        </form>
      </div>
    </div>
  )
}

export default Register;
