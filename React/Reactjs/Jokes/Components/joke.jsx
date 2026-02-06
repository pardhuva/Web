import React from "react"

export default function Joke(props) {
    const [isshown ,setIsShown] = React.useState(false)

    function toggleshown() {
        setIsShown(prevShown => !prevShown)
    }
    // only displays the punchline paragraph if 'isShown' is true 
    return (
        <div>
            {prev.setup && <h3>{prev.setup}</h3>}
            {isshown && <p>props.punchline</p>}
            <button onClick={toggledown}>Shown Punchline</button>
            <hr/>
        </div>
    )
}