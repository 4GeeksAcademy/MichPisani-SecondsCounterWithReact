import React from "react";

const SecondsCounter = (props) => {
    

    
    return (
        <>
            <div className="d-flex justify-content-center bg-dark mt-2 p-2">
                <div className="text-light me-3"><i className="fa-regular fa-clock"></i></div>
                <div className="text-light">{props.seconds.toString().padStart(6, "0")}</div>
            </div>
           
        </>
    )
}


export default SecondsCounter