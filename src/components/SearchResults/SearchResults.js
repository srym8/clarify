import React from "react";

import "./SearchResults.css";

import TrackList from "../TrackList/TrackList";

function SearchResults(props) {
    return (
        <div className="SearchResults">
            <h2>Search Results</h2>
            <TrackList sort={props.sort} remove={props.remove} needsRem={true} tracks={props.results} onAdd={props.onAdd} isPlaylist={false}/>
        </div>
    )
}

export default SearchResults