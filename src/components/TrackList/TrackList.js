import React from "react";

import "./TrackList.css";

import Track from "../Track/Track";
import SortResults from "../Buttons/Sort/SortResults/SortResultsButton";
import RemoveDuplicates from "../Buttons/RemoveDuplicates/RemoveDuplicates";

function TrackList(props) {

    const addRemoveDuplicates = () => {
        if(props.isresults) {
            return (
                <div className="buttonRow">
                <SortResults action={props.sort} />
                <RemoveDuplicates remove={props.remove}/>
                </div>
            )
        }

        return (
            <SortResults action={props.sort} />
        )
    }

    return (
        <>
        {addRemoveDuplicates()}
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