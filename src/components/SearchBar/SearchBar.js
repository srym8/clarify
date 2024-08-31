import React, { useState, useEffect } from "react";

import "./SearchBar.css";

function SearchBar(props) {

    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
    }

    const search = () => {
        props.Search(query);
    }

    useEffect(() => {
        const handleEnter = (e) => {
            if (e.key === 'Enter') {
                search()
            }
        }

        window.addEventListener("keydown", handleEnter)

        return () => {
            window.removeEventListener("keydown", handleEnter)
        }
    })

    return (
        <div className="searchBar" data-testid="searchbar-1">
            <input name="bar" placeholder="Enter a Song or Artist" onChange={handleChange}></input>
            <button className="sButton" onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar