import React from "react";

import "./TrackList.css";

import Track from "../Track/Track";

function TrackList(props) {

    return (
        <div className="TrackList">
            {props.tracks.map((track) => {
                return (
                    <div className="Track">
                    <Track
                        name={track.name}
                        artist={track.artist}
                        album={track.album}
                        id={track.id}
                    />
                    </div>
                )
            })}
        </div>
    )
}

export default TrackList