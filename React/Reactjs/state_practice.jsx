import React from "react"
/**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */

export default function App() {
    let [count , setcount] = React.useState();

    function add(){
        setcount(count + 1)
    }
    function minus() {
        setcount(count - 1)
    }
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onclick = {minus} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onclick ={add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}