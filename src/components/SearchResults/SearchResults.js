import React from "react";

import "./SearchResults.css";

import TrackList from "../TrackList/TrackList";

function SearchResults(props) {
    return (
        <div className="SearchResults">
            <h2>Search Results</h2>
            <TrackList tracks={props.results} onAdd={props.onAdd} isPlaylist={false}/>
        </div>
    )
}

export default SearchResults