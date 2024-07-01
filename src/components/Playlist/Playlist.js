import React from "react";

import "./Playlist.css";

import TrackList from "../TrackList/TrackList";

function Playlist(props) {

    const handle = (e) => {
        props.playlistNameChange(e.target.value);
    }

    return (
        <div className="Playlist" data-testid="playlist-1">
            
            <p id="This is to add space above playlist name input"></p>
            <input defaultValue={"New"} onChange={handle}></input>
            <button className="PlaylistSave" onClick={props.savePlaylist}>Save To Spotify</button>
            <TrackList
            tracks={props.pTracks}
            onRemove={props.onRemove}
            isPlaylist={true}
            />
        </div>
    )
}

export default Playlist