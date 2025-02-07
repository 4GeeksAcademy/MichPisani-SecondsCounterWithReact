//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/counter.jsx";
import SecondsCounter from "./component/secondsCounter.jsx"
import SecondsInput from "./component/input.jsx";

const root = ReactDOM.createRoot(document.getElementById('app'))

/*let numbers ={
     units = 0;
     tens = 0;
     hundreds = 0;
     thousands = 0;
}*/



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


    /*units ++
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
    }*/