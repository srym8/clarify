import React from "react";

import "./SearchBar.css";

function SearchBar(props) {
    const handleChange = () => {
        
    }

    const search = () => {
        
    }

    return (
        <div className="searchBar">
            <input placeholder="Enter your Favorite Song" onChange={handleChange}></input>
            <button className="sButton" onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar