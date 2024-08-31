import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

import Spotify from "../../Spotify/Spotify";

import mergeSort from "../Sort/SortFunc";

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

        const trackUris = pTracks.map((track) => track.uri);

        Spotify.savePlaylist(pName, trackUris).then(() => {
            setPName("New");
            setPTracks([]);
        })

    }

    const sortResults = () => {
        const ref = {}

        for (let i of results) {
            ref[i.name] = i.name[0].charCodeAt(0)
        }

        let namesB = []

        namesB = results.map((track) => {
            return track.name
        })

        let firstL = []

        firstL = namesB.map((name) => {
            return name[0]
        })

        let codes = []

        codes = firstL.map((letter) => {
            return letter.charCodeAt(0)
        })

        const f = mergeSort(codes) // DOING THE SORT

        const sortedTracks = []

        for (let i in f) {
            const code = f[i]

            for (let track in results) {
                const sTrack = results[track]
                if (sTrack.name[0].charCodeAt(0) === code) {
                    sortedTracks.push(sTrack)
                }
            }
        }

        setresults(sortedTracks)
    }

    const sortPTracks = () => {
        const ref = {}

        for (let i of pTracks) {
            ref[i.name] = i.name[0].charCodeAt(0)
        }

        let namesB = []

        namesB = pTracks.map((track) => {
            return track.name
        })

        let firstL = []

        firstL = namesB.map((name) => {
            return name[0]
        })

        let codes = []

        codes = firstL.map((letter) => {
            return letter.charCodeAt(0)
        })

        const f = mergeSort(codes) // DOING THE SORT

        const sortedTracks = []

        for (let i in f) {
            const code = f[i]

            for (let track in pTracks) {
                const sTrack = pTracks[track]
                if (sTrack.name[0].charCodeAt(0) === code) {
                    sortedTracks.push(sTrack)
                }
            }
        }

        setPTracks(sortedTracks)

    }

    const removeDuplicates = () => {
        let ids = [];
        let final = [];

        results.forEach(function(track) {
            ids.push(track.id)
        })
        console.log(ids)
        
        let uniqueIds = [...new Set(ids)];
        console.log(uniqueIds)

        for(let id of uniqueIds) {
            let track = results.find((track) => track.id === id)
            final.push(track)
        }

        setresults(final)
    }

    return (
        <div>
            <div className="App" data-testid="app-1">

                <h1>Clarify DO LOGIN AND REMOVE DUPLICATES</h1>

                <Link to="/">Back to login</Link>
                <Link to="/sort">To Testing</Link>

                <div className="Search">

                    <SearchBar Search={search}/>
                    <SearchResults results={results} onAdd={addTrack} sort={sortResults} remove={removeDuplicates} />

                </div>

                <div className="Playlist">

                    <Playlist
                    name={pName}
                    playlistNameChange={uPName}
                    pTracks={pTracks}
                    savePlaylist={onSave}
                    onRemove={removeTrack}
                    sort={sortPTracks}
                    />

                </div>
                
            </div>
        </div>
    )
}

export default App