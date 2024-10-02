import React from "react";

import "./TrackList.css";

import Track from "../Track/Track";
import SortResults from "../Buttons/Sort/SortResults/SortResultsButton";
import RemoveDuplicates from "../Buttons/RemoveDuplicates/RemoveDuplicates";

function TrackList(props) {

    const addRemoveDuplicates = () => {
        if(props.needsRem) {
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
                {Array.isArray(props.tracks) && props.tracks.length > 0 ? (
                    props.tracks.map((track) => {
                        return (
                            <div className="Track" key={track.id}>
                                <Track
                                    track={track}
                                    onAdd={props.onAdd}
                                    onRemove={props.onRemove}
                                    isPlaylist={props.isPlaylist}
                                    id={track.id}
                                />
                            </div>
                        );
                    })
                ) : (
                    <div>No tracks available.</div> // Fallback UI
                )}
            </div>
        </>
    );
}

export default TrackList