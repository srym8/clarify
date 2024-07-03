import React from "react";

import "./TrackList.css";

import Track from "../Track/Track";
import SortResults from "../Buttons/Sort/SortResults/SortResultsButton";

function TrackList(props) {

    return (
        <>
        <SortResults action={props.sort}/>
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