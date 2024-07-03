import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const handlePassword = (p) => {
        p.preventDefault();
        setPassword(p.target.value)
    }

    let navigate = useNavigate();

    const handleSubmit = () => {
        if (email === password) {
            navigate("/app")
        }
    }

    return (
        <div className='Login'>
            <h1>Clarify</h1>
            <form id='login-form' onSubmit={handleSubmit}>
                <input className='field' placeholder='Enter Email' value={email} onChange={handleEmail}></input>
                <input className='field' placeholder='Enter Password' value={password} onChange={handlePassword}></input>
                <button type='submit' form='login-form'>Login</button>
                <Link to="/app">To app</Link>
            </form>
        </div>
    )
}

export default Login