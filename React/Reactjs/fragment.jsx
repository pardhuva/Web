
import {createRoot} from "react-dom/client"
import {Fragment} from "react"

const root = createRoot(document.getElementById("root"))

root.render(
    <P/>
)


function P(){
  return (
      <Fragment>
          <header>
           <img src="react-logo.png" width="20px" alt="react-logo"></img>
          </header>
            <main>
                        <ol>
                            <li> it is composable </li>
                            <li>it is declarative</li>
                            <li>it has more demand </li>
                        </ol>
            </main>
            <footer>
                <p> All rights reserved</p>
            </footer>
      </Fragment>

  )
    
}