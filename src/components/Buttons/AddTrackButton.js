import React from "react";

import "./TrackButton.css";

function AddTrackButton(props) {

    return (
        <div>
            <div class="frame">
                <button class="custom-btn btn-12" onClick={props.action}><span>Click to add!</span><span>+</span></button>
            </div>
        </div>
    )

}

export default AddTrackButton