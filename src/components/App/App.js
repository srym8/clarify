import React, { useState } from "react";

import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";


function App() {
    const [results, setresults] = useState([])



    const search = () => {

        const query = [{name: "abcdef", artist: "alpha", album: "letters", id: 1},
        {name: "one more time", artist: "jack black", album: "kfp", id: 2},
        {name: "one more time", artist: "britany", album: "idk", id: 3},
        {name: "Axel F", artist: "Crazy Frog", album: "idk", id: 4}]

        setresults(query)
    }

    return (
        <div>
            <div className="App">
                <h1>Clarify</h1>
                <div className="Search">
                    <SearchBar Search={search}/>
                    <SearchResults results={results}/>
                </div>
                <div className="Playlist"></div>
            </div>
        </div>
    )
}

export default App