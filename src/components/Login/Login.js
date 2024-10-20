import React from 'react';

import "./Login.css";

import Spotify from '../../Spotify/Spotify';

function Login() {

    const handleLogin = () => {

        Spotify.getAccessToken(true)
        
    }

    return (
        <div className='Login'>

            <h1>Clarify</h1>

            <form id='login-form'>

                <button className='field' type='button' onClick={handleLogin}>Login</button>

            </form>

        </div>
    )
}

export default Login