import React from "react";

function Track(props) {
    return (
        <div className="Track">
            <h3>{props.name}</h3>
            <p>{props.artist}</p>
            <p>{props.album}</p>
            <p>{props.id}</p>
        </div>
    )
}

export default Track