import padsData from "./pads"
import React from "react"
import Pad from "./Pad"

export default function App(darkMode) {
    const [pads, setPads]  = React.useState(padsData)
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    // const styles = {
    //     backgroundColor : dakMode ? "#222222":"#cccccc"
    // }
    function toggle() {
        console.log("toggle")
    }
     const buttonElements = pads.map(pad =>{
        <Pad  toggle ={toggele} key = {pads.id} color={props.color} on = {pads.on}/>
     })

     function turnalloff() {
        setPads(prevpads => prevpads.map(pad =>({
            ...pad,
            on:false
        })))
     }
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
            <button onClick="turnalloff">Turn All Off</button>
        </main>
    )
}