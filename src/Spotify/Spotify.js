const clientId = "4718e4f536b64fcda2004650287911a0";
const redirectUri = 'https://clarify42.netlify.app/';
let accessToken = '';

const Spotify = {

  betterLogin() {
    // On page load, check if the access token is in the URL
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      // This block runs if the user has returned from Spotify with an access token

      // Extract the access token and expiration time from the URL
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      //Clear any existing token before setting the new one

      if (accessToken) {
        accessToken = '';
      }

      // Set the access token to expire after the designated time
      window.setTimeout(() => {
        accessToken = '';  // Clear the token when it expires
      }, expiresIn * 1000);

      // Clean the URL by removing the token and expiration info for security reasons
      window.history.pushState('Access Token', null, '/');

      // Return the access token for use in the app
      return accessToken;

    } else {
      // If no token is found in the URL (this runs during the initial login attempt)

      accessToken = ''; // Clear any existing token
  
      // Optionally show a loading message or spinner
      document.body.innerHTML = `<h1>Redirecting to Spotify for login...</h1>`;

      // Redirect the user to Spotify's login page to request an access token
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}&show_dialog=true`;
      window.location = accessUrl;
    }

  },


/*   getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  }, */

  async search(term) {
    if(!accessToken) {
      console.log("Tried searching, without access token")
      return
    }

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const jsonResponse = await response.json();
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artists: track.artists.map(artist => artist.name),
        album: track.album.name,
        uri: track.uri
      }));
    } catch (error) {
      console.error('Error searching tracks:', error);
      return []; // Return an empty array in case of an error
    }
  },

  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      console.log('Playlist name or tracks are missing.');
      return;
    }

    const accessToken = this.getAccessToken();
    if (!accessToken) {
      console.log('Access Token is missing.');
      return;
    }

    const headers = { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' };

    try {
      console.log('trackUris', trackUris);
      const userResponse = await fetch('https://api.spotify.com/v1/me', { headers });
      const userData = await userResponse.json();
      const userId = userData.id;

      const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ name: name })
      });
      const playlistData = await createPlaylistResponse.json();
      const playlistId = playlistData.id;

      const addTracksResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ uris: trackUris })
      });

      if (!addTracksResponse.ok) {
        const errorData = await addTracksResponse.json();
        console.error('Failed to add tracks:', errorData);
        return;
      }

      console.log("Playlist saved to Spotify");
    } catch (error) {
      console.error('Error saving playlist:', error);
    }
  }
};

export default Spotify;
