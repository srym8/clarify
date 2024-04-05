import React, { useState } from "react";

import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";


function App() {

    const [results, setresults] = useState([])
    const [pName, setPName] = useState("New")
    const [pTracks, setPTracks] = useState([])



    const search = () => {

        const query = [{name: "abcdef", artist: "alpha", album: "letters", id: 1},
        {name: "one more time", artist: "jack black", album: "kfp", id: 2},
        {name: "one more time", artist: "britany", album: "idk", id: 3},
        {name: "Axel F", artist: "Crazy Frog", album: "idk", id: 4}]

        setresults(query)
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

    const hPName = (n="woah") => {

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
                    playlistNameChange={hPName}
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