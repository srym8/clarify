import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Sort.css";

import TrackList from "../TrackList/TrackList";

function SortTest() {

    const [trackies, setTrackies] = useState([])

    function merge(left, right) {
        let resultArray = [],
            leftIndex = 0,
            rightIndex = 0;
    
        // Loop through both arrays, comparing elements and adding the smaller one to the resultArray
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++; // Move to the next element in the `left` array
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++; // Move to the next element in the `right` array
            }
        }
    
        // Concatenate the remaining elements from either `left` or `right` (if any)
        return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
    }

    function mergeSort(array) {
        // Base case: If the array has only one element, return it (already sorted)
        if (array.length === 1) {
            return array;
        }
    
        // Divide the array into two halves
        const middle = Math.floor(array.length / 2); // Find the middle index
        const left = array.slice(0, middle); // Split the array into left half
        const right = array.slice(middle); // Split the array into right half
    
        // Recursively call mergeSort on the left and right halves
        return merge(
            mergeSort(left), // Recursively sort the left half
            mergeSort(right) // Recursively sort the right half
        );
    }

    function handleTracksies() {

        setTrackies([])

        const mock = [
        {name: "One more time", artists: "jack black", album: "kfp", id: 2, uri: "jdye6r"},
        {name: "abcdef", artists: "alpha", album: "letters", id: 1, uri: "ksbt9d"},
        {name: "one more time", artists: "britany", album: "idk", id: 3, uri: "c7eng9"},
        {name: "Axel F", artists: "Crazy Frog", album: "idk", id: 4, uri: "7wnofl"},
        {name: "Virtual Insanity", artists: "Jamiroquai", album: "Travelling Without Moving", id: 5, uri: "41nc9g"}]

        setTrackies(mock)
    }

    function sort() {

        const ref = {}

        for (let i of trackies) {
            ref[i.name] = i.name[0].charCodeAt(0)
        }

        let namesB = []

        namesB = trackies.map((track) => {
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

            for (let track in trackies) {
                const sTrack = trackies[track]
                if (sTrack.name[0].charCodeAt(0) === code) {
                    sortedTracks.push(sTrack)
                }
            }
        }

        setTrackies(sortedTracks)

    }

    return (
        <>
        <h1>Testing the merge sort</h1>

        <button onClick={handleTracksies}>Set Trackies</button>

        <TrackList tracks={trackies} isPlaylist={false} istest={true} sort={sort}/>
        <Link to="/app">Back to App</Link>
        </>
    )
}

export default SortTest