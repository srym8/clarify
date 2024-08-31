import React from "react";

import "../Sort/SortResults/SortResults.css"

function RemoveDuplicates(props) {

    const styles = {
        "vertical-align" : "middle",
        "width" : "400px"
    }
    
    return (
        <div>
            <button class="button" style={styles} onClick={props.remove}><span>REMOVE DUPLICATES</span></button>
        </div>
    )
}

export default RemoveDuplicates