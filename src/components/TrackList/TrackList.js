import React from "react";

import "./TrackList.css";

import Track from "../Track/Track";

function TrackList(props) {

    return (
        <>
        <button onClick={props.sort}>SORT</button>
        <div className="TrackList">
            {props.tracks.map((track) => {
                return (
                    <div className="Track">
                    <Track
                        track={track}
                        onAdd={props.onAdd}
                        onRemove={props.onRemove}
                        isPlaylist={props.isPlaylist}
                        id={track.id}
                    />
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default TrackList