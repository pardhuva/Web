/**
 *  move the header element from the page component into 
 *  its own component called "Header"
 * 
 * then render an instance of the header component inside 
 *  the Page componetn where the 'header' used to be 
 * 
 */


import {createRoot} from "react-dom/client"
import {Fragment} from "react"

const root = createRoot(document.getElementById("root"))

root.render(
    <P/>
)


function P(){  //parent component  and below header ,main,footer are the child components 
  return (
      <Fragment>
          <Header/>   
          <Main/>
          <Footer/>
            
      </Fragment>

  )
    
}

function Header() {
    return (
      <header>
           <img src = "./react-logo.png" width ="40px" alt = "React logo" />
           <nav>
                {/* now here i added the className section now can i add css  */}
              <ul className ="nav-list"> 
                  <li>Pricing </li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
           </nav>
        </header>
     )  
  }

  function Main() {
     return(
           <main>
                        <ol>
                            <li> it is composable </li>
                            <li>it is declarative</li>
                            <li>it has more demand </li>
                        </ol>
            </main>
     )
  }

  function Footer(){
      <footer>
                <p> All rights reserved</p>
      </footer>
  }

  