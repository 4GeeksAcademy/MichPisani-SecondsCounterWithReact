//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const root = ReactDOM.createRoot(document.getElementById('app'))

let numbers ={
     units = 0;
     tens = 0;
     hundreds = 0;
     thousands = 0;
}



//render your react application
setInterval(()=>{
    root.render(<Home units={units} tens={tens} hundreds={hundreds} thousands={thousands}/>);
    units ++
    if(units==10){
        units=0
        tens++
        if(tens==10){
            tens=0
            hundreds++
            if(hundreds==10){
                hundreds=0
                thousands++
            }
        }
    }

},1000)


