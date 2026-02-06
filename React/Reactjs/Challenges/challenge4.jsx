/**
 *  create a custom "page" component 
 *   
 *   it shoudl return an ordereed list with the 
 *     reasons why youre excited to be learnign react;
 * 
 *    render the page component 
 */

import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))

root.render(
    <Page/>
)

function Page() {
     
    return (
        <main>
            <ol>
                <li> it is composable </li>
                <li>it is declarative</li>
                <li>it has more demand </li>
            </ol>
        </main>
    )
} 

/**
 * challenge part2:
 * 
 * - Add a '<header>' element with an '<img/>' element with the image of the 
 *   react logo inside (src="react-logo.png") and make sure to set teh 
 *   width to something more manageble so it doesnt take up teh whole screen 
 *   also ,always you should include some alt text on the image.
 * - Add an '<h1> with sime text describing the page. (E.g. "Reasons 
 *    "i'm excited to learn React"). place it above the ordered lsit,then wrap the '<h1> and '<ol> inside a '<main> element to keep our semantic 
 *    structure flowing well.
 *  - Add a <footer> after the list that says 
 *     "0 20x <last name here> development. All rights reserved"
 * 
 */

/*
function P(){
  return (
      <div>
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
      </div>

  )
    
}

*/
