import React, { useState } from "react";

import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

import Spotify from "../../Spotify/Spotify";


function App() {

    const [results, setresults] = useState([])
    const [pName, setPName] = useState("New")
    const [pTracks, setPTracks] = useState([])



    const search = (query) => {

        Spotify.search(query).then(setresults)

    }

    const addTrack = (track) => {

        const alreadyThere = pTracks.some((t) => t.id === track.id);

        if (alreadyThere) {
            return;
        } else {
            setPTracks((prevT) => [...prevT, track]);
        }
    }

    const removeTrack = (track) => {

        setPTracks((prevT) => prevT.filter((t) => t.id !== track.id))
    }

    const uPName = (n) => {

        setPName(n)

    }

    const onSave = () => {



    }

    return (
        <div>
            <div className="App">
                <h1>Clarify</h1>
                <div className="Search">

                    <SearchBar Search={search}/>
                    <SearchResults results={results} onAdd={addTrack}/>

                </div>
                <div className="Playlist">

                    <Playlist
                    name={pName}
                    playlistNameChange={uPName}
                    pTracks={pTracks}
                    savePlaylist={onSave}
                    onRemove={removeTrack}
                    />

                </div>
            </div>
        </div>
    )
}

export default App