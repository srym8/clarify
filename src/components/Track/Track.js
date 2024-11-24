import React from "react";

import "./Track.css"

import AddTrackButton from "../Buttons/TrackButtons/AddTrackButton";
import RemoveTrackButton from "../Buttons/TrackButtons/RemoveTrackButton";

function Track(props) {

    const addT = () => {
        props.onAdd(props.track)
    }

    const removeT = () => {
        props.onRemove(props.track)
    }

    const addButtons = () => {

        if(props.isPlaylist) {
            return (
                <RemoveTrackButton action={removeT}/>
            )
        }

        return (
            <AddTrackButton action={addT}/>
        )
    }

    //The basis of how all tracks are rendered

     return (
        <div className="Track" data-testid="track-1">
            <div className="information">
                <h3>🎼 {props.track.name}</h3>
                <p>✍️ {props.track.artists}</p>
                <p>💿 {props.track.album}</p>
            </div>
            {addButtons()}
        </div>
    )
}

export default Track