//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import SecondsCounter from "./component/secondsCounter.jsx"
import SecondsInput from "./component/input.jsx";

const root = ReactDOM.createRoot(document.getElementById('app'))

//render your react application

let seconds=0
let countdown =10

setInterval(()=>{
   

    
    root.render(
        <>
           
            <SecondsInput/>
            <SecondsCounter seconds={seconds}/>
            <SecondsCounter seconds={countdown}/> 
        </>
        
    );
    seconds++
    
    countdown = countdown == 0 ? 0 : countdown-1
    

    let secondsValue = document.getElementById('secondsValue').value

    if ( secondsValue == (seconds - 1)){
        alert ("You have reached your number")
    } 
    

},1000)
