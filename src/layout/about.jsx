import React from "react";


function about({ match }) {
    return (
        <div>
            <h1>teste {match.params.id}</h1>
        </div>
    )
}

export default about;

