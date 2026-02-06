import React from "react"

export default function App(props) {

    const [starWarsData , setStarWaraData] = React.useState(null)
    const [count , setCount] = React.useState(0)

   React.useEffect(() => {
       fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))
   } , [count] )

    return (
        <div>
             <h2>The count is {count}</h2>
             <button onClick ={() => setCount(prevCount => prevCount +1)}>Add</button>
        </div>
    )
}

//