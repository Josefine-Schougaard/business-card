import React from "react"
import portrait from "../portrait.jpg"

export default function Info(){
    return(
        <div className="Info">
            <img src={portrait} alt="black and white portrait" className="portrait"></img>
            <h1>Josefine B. Schougaard</h1>
            <h2>Web Developer</h2>
            <p><a href="https://josefineschougaard.dk/">josefineschougaard.dk</a></p>
            <button>Email</button>
        </div>
    ); 
}
