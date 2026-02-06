import React from "react"

export default function App(props) {

    const [starWarsData , setStarWaraData] = React.useState(null)

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))

    return (
        <div>
            <pre>{JSON.stringify(starWarsData , null,2)}</pre>
        </div>
    )
}

//what are React's  primary tasks ?
/**
 * 1. work with teh DOM/browser to render UI to the page
 * 2.Manage state for us between render cycles (i.e. state values are 
 *    "remembered from one render to the next ")
 * 3. keep the UI updated whenever state or props chages occur 
 * 
 */

/**  what cant React handle on its own 
 * 1. outside effects 
 *    . local storage 
 *    . API/ database interactions 
 *    . Subscriptions( e.g. websocket connections )
 *    . basically anything that React isnt charge of 
 * 
 * 
 */