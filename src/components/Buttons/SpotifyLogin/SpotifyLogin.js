import React from 'react';

import './SpotifyLogin.css';

import Spotify from '../../../Spotify/Spotify';

function SpotifyLogin() {

    const handleLogin = () => {

        Spotify.betterLogin();

    }

    return (
        <div className='LoginButtonDiv'>
            <button className='LButton' onClick={handleLogin}>SpotifyLogin</button>
        </div>
    )
}

export default SpotifyLogin