//If the user tries to navigate outside the predetermined path, this component will render, containing an error message, and a link back to the root page

import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <><main>404 Not Found</main><Link to="/">Back To Login</Link></>
    )
}

export default NotFoundPage