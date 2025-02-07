import React from "react";

const SecondsInput = (props) =>{

    
    return (
        <div className="d-flex justify-content-center p-2 mt-2 bg-dark">
         <label className="me-2 text-light">Enter a number to stop the counter</label>
         <input type="text" id="secondsValue"/>
        </div>
    )

}

export default SecondsInput