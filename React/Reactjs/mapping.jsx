import jokesdata from "./jokesdata.jsx"

export default function mapping() {

    const jokeelements = jokesdata.map((joke) => {
          return <Joke  setup ={joke.setup}/>
    })

    return (
        <main>
             {jokeelements}
        </main>
    )
}