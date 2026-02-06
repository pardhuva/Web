import React from "react"

export default function Joke(props) {
    const [isshown ,setIsShown] = React.useState(false)

    function toggleshown() {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div>
            {prev.setup ?<h3>{prev.setup}</h3> :null}
            {isshown ? <p>props.punchline</p> : null}
            <button onClick={toggledown}> {isShown ? "Hide" : "Show"} Shown Punchline</button>
            <hr/>
        </div>
    )
}