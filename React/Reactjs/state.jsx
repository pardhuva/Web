import React from "react"

export default function App() {
    let [state ,func]= React.useState("yes")
    
    function handleclick(){
     func("hell yes")
    }

    return (
        <main>
            <h1 className="title">is state important to know </h1>
            <button onclick={handleclick}> {state}</button>
        </main>
    )
}


/**
 * import React from "react"

export default function App() {
    const state = "yes"

    function handleclick(){
        state = "hell yes"
    }

    return (
        <main>
            <h1 className="title">is state important to know </h1>
            <button onClick= "handleclick()"> {state}</button>
        </main>
    )
}
 */