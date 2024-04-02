import React from "react";

import "./Track.css"

function Track(props) {

//  const add = () => {

//  }

//  const remove = () => {

//  }

    return (
        <div className="Track">
            <h3>{props.name} <button>Save To Spotify</button></h3>
            <p>{props.artist}</p>
            <p>{props.album}</p>
            <p>{props.id}</p>
        </div>
    )
}

export default Track