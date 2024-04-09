import React from 'react';
import { Link } from 'react-router-dom';

import "./Login.css";

function Login() {
    return (
        <div className='Login'>
            <form id='login-form'>
                <input className='field' placeholder='Enter Email'></input>
                <input className='field' placeholder='Enter Password'></input>
                <button type='submit' form='login-form'>Login</button>
                <Link to="/app">To app</Link>
            </form>
        </div>
    )
}

export default Login