import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Sort.css";

import TrackList from "../TrackList/TrackList";

function SortTest() {

    const [og, setOg] = useState([])
    const [sorted, setSorted] = useState([])

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

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    function doSort() {

        setOg([])
        setSorted([])

        const randomNumbers = []

        for (let i = 0;i < 6;i++) {
            const randomNumber = getRandomInt((i+1)*6)
            randomNumbers.push(randomNumber)
        }

        setOg(randomNumbers)

        const answer = mergeSort(randomNumbers)
        setSorted(answer)

    }

    function handleTracksies() {

        setTrackies([])

        const mock = [{name: "abcdef", artists: "alpha", album: "letters", id: 1, uri: "ksbt9d"},
        {name: "one more time", artists: "jack black", album: "kfp", id: 2, uri: "jdye6r"},
        {name: "one more time", artists: "britany", album: "idk", id: 3, uri: "c7eng9"},
        {name: "Axel F", artists: "Crazy Frog", album: "idk", id: 4, uri: "7wnofl"},
        {name: "Virtual Insanity", artists: "Jamiroquai", album: "Travelling Without Moving", id: 5, uri: "41nc9g"}]

        setTrackies(mock)
    }

    return (
        <>
        <h1>Testing the merge sort</h1>
        <div className="sorting">

        <div className="ns">
        <p>Before Sorting {og.map((n) => {
            return (
                <p>{n}</p>
            )
        })}</p>
        </div>

        <button className="ns" onClick={doSort}>SORT</button>

        <div className="ns">
        <p>After Sorting{sorted.map((n) => {
            return (
                <p>{n}</p>
            )
        })}</p>
        </div>

        </div>
        <button onClick={handleTracksies}>Set Trackies</button>
        <TrackList tracks={trackies} isPlaylist={false}/>
        <Link to="/app">Back to App</Link>
        </>
    )
}

export default SortTest