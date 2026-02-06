/**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the button flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
export default function App() {
    const [isgoingout , setgoingout] = React.useState(false)
    function handleclick(){
        setgoingout( prevState => !prevState)
    }
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button onclick={handleclick} className="value">{isgoingout}</button>
        </main>
    )
}