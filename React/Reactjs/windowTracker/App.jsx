import WindowTracker from "./WindowTracker"
import React from "react"

export default function App() {
    const [isshown , setShown]  = React.useState(true)

    function toggle() {
        setShown( prev => !prev)
    }
    
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    
    return (
        <main className="container">
            <button onClick ={toggle}>
                Toggle WindowTracker
            </button>
            {isshown && < WindowTracker />}
        </main>
    )
}