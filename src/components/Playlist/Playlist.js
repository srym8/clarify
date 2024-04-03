import React from "react";

import "./Playlist.css";

import TrackList from "../TrackList/TrackList";

function Playlist(props) {

    const handle = (e) => {
        props.playlistNameChange(e.target.value);
    }

    return (
        <div className="Playlist">
            <input defaultValue={"New"} onChange={handle}></input>
            <TrackList
            tracks={props.pTracks}
            removeT={props.onRemove}
            isPlaylist={true}
            />
            <button className="PlaylistSave" onClick={props.test}>Save To Spotify</button>
        </div>
    )
}

export default Playlist