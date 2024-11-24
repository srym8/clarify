import React from "react";

import "./TrackList.css";

import Track from "../Track/Track";
import SortResults from "../Buttons/Sort/SortResults/SortResultsButton";
import RemoveDuplicates from "../Buttons/RemoveDuplicates/RemoveDuplicates";

function TrackList(props) {

    //Incase of new trackList components elsewhere that don't require sort / remove duplicates buttons, trackList components will only render them if the Boolean parameter is True

    const addRemoveDuplicatesAndSort = () => {
        if(props.needsSortAndRemove) {
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

    //The foundation of how lists of tracks are rendered. Both search results and chosen playlist tracks will have their tracks rendered with this method

    return (
        <>
        {addRemoveDuplicatesAndSort()}
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