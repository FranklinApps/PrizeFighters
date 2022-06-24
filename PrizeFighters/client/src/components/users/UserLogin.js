import axios from 'axios';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const navigate = useNavigate();


const handleSubmit = async (e) =>{
  console.log(email);
     e.preventDefault();
    const res =  await axios.post("/api/user", {
     email,
     password,
    }
    .then(navigate('/')));
    
    console.log(res)
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
            <input onChange={(e)=> setEmail(e.target.value)} value={email} type='text' name='email'/>
            <label>Password:</label>
            <input onChange={(e)=> setPassword(e.target.value)} value={password} type='password' name='password'/>
            <input type='submit' value='login'/>
            </form>
        </div>
    )
}

export default Login;