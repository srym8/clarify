import React from 'react';

import './SpotifyLogin.css';

import Spotify from '../../../Spotify/Spotify';

function SpotifyLogin() {

    const handleLogin = () => {

        Spotify.login();

    }

    return (
        <div className='LoginButton'>
            <button onClick={handleLogin}>SpotifyLogin</button>
        </div>
    )
}

export default SpotifyLogin