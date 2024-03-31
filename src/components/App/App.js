import React, { useState } from "react";

import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";


function App() {
    const [results, setresults] = useState(["abc", "one mroe time", "jisfyhksjfd"])

    return (
        <div>
            <div className="App">
                <h1>Clarify</h1>
                <div className="Search">
                    <SearchBar />
                    <SearchResults results={results}/>
                </div>

            </div>
        </div>
    )
}

export default App