//Storing the clientId and redirect URI

const clientId = "4718e4f536b64fcda2004650287911a0";
const redirectUri = 'https://clarify42.netlify.app/app';

//Initialising the access token

let accessToken;

//The Spotify utility object definition

const Spotify = {

  //The definition of the function that redirects the user to Spotify's authentication page and retrieves the current access token. Accepts a boolean argument to the parameter 'forceLogin', incase the token needs to be retrieved without logging in again

  getAccessToken(forceLogin = false) {
    if (!accessToken || forceLogin) {
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    
      if (accessTokenMatch && expiresInMatch) {
        // Extract the access token and expiration time from the URL
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
    
        // Set a timeout to clear the token when it expires
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
    
        // Clean the URL by removing the token and expiration info for security reasons
        window.history.pushState('Access Token', null, '/');
        return accessToken;
      } else {
        // Redirect to Spotify login if no token is available in the URL

        document.body.innerHTML = `<h1>Redirecting to Spotify for login...</h1>`;

        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}&show_dialog=true`;
        window.location = accessUrl;
      }
    }
    return accessToken;  // Return the token if it's already set
  },

  //The function definition of a function that executes the search with a given query argument, to the parameter 'term'

  async search(term) {
    accessToken = this.getAccessToken();

// Using a try block to handle potential errors while fetching search results from the Spotify API

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

      // Using a catch block to log and handle any errors that occur during the API request.

    } catch (error) {
      console.error('Error searching tracks:', error);
      console.log("[]")
      return []; // Return an empty array in case of an error
    }
  },

  //The definition of the function that handles saving a playlist to the user's Spotify account

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

    //A try block that attempts to execute the request. The use of the try block means that high level errors can be caught and handled in a catch block

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