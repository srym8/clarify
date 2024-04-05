import React from "react";

import "./Track.css"

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
                <><button className="action" onClick={addT}>
                    -
                </button><button className="action" onClick={removeT}>
                        +
                    </button></>
            )
        }

        return (
            <button className="action" onClick={removeT}>
                +
            </button>
        )
    }

    return (
        <div className="Track">
            <div className="information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist}</p>
                <p>{props.track.album}</p>
                <p>{props.track.id}</p>
            </div>
            {addButtons()}
        </div>
    )
}

export default Track