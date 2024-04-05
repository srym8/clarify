import React from "react";

import "./Track.css"

function Track(props) {

    const addT = () => {
        props.onAdd()
    }

    const removeT = () => {
        props.onRemove()
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
                <h3>{props.name}</h3>
                <p>{props.artist}</p>
                <p>{props.album}</p>
                <p>{props.id}</p>
            </div>
            {addButtons()}
        </div>
    )
}

export default Track