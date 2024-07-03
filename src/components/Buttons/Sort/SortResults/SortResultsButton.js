import React from "react";

import "./SortResults.css";

function SortResults(props) {

    const styles = {
        "vertical-align" : "middle"
    }

    return (
        <div>
            <button class="button" style={styles} onClick={props.action}><span>SORT</span></button>
        </div>
    )
}

export default SortResults