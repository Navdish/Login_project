import react from 'react'
import {useState} from 'react'
import './Login.css'
import axios from 'axios'

function Signup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = async(data) => axios.post('http://localhost:8080/signup', data);
    async function handleSubmit(e) {
        const response = await login({name, email, password});
        console.log(response);
    }
    return (
        <div className='signup'>
            <h1>Login Form</h1>
            <form className='signup-form'>
                <input type="text" placeholder='name' value={name} onChange={(e)=> setName(e.target.value)}/>
                <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit" onClick={(e)=> handleSubmit(e)}>Submit</button>
            </form>
        </div>
    );
}

export default Signup;