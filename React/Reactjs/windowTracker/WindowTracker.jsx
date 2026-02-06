import React from "react"

export default function WindowTracker() {
    const [windowWidth ,setwindowwidth] = React.useState(window.innerWidth)
        
        React.useEffect( () =>{

            function watchwindowWidth() {
                console.log("resized")
                setwindowwidth(window.innerWidth)
            } 
            window.addEventListener("resize" , watchwindowWidth)

            return function() {
                console.log("cleaning up ....")
                window.removeEventListener("resize",watchwindowWidth)
            }
        }, [] )
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}