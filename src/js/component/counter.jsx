import React from "react";

const SecondsCounter = (props)=>{
    return (
        <div className="container-fluid d-flex">
            <div><i className="fa-regular fa-clock"></i></div>
            <div>{props.thousands}</div>
            <div>{props.hundreds}</div>
            <div>{props.tens}</div>
            <div>{props.units}</div>
        </div>
    )
}

export default SecondsCounter

