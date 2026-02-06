/**
 *  - create an App component in a seperate App.jsx file which is sibling to this index.jsx file 
 * - create a components folder 
 * - create the following components in a seperate files inside the components folder.in each one,render an 'h1'
 *   write the name of the componetn (e.g. return <h1> navbar foes here </h1>):
 *   -Navbar
 *   -Main
 * 
 * - Have App componetn import and render the navbar and main componetnts 
 * - import and render the App component inside of index.jsx using Reaction 
 *     - At this point you should have your "Navbar goes here" etc. showing up in the mini-browser 
 * - go to google fonts and get the "Inter" font wiht weihgts 400,600, and 700.
 *   put the <links/> to those fonts Above the style.css link in index.html 
 *    you may need to do some extra research to figure out how this works if you havent done it before.
 * 
 * 
 */

import {createRoot} from "react-dom/client"
import App  from "./Components/App.jsx"

import { Fragment } from "react/jsx-runtime"

const root = createRoot(document.getElementById("root"))

root.render (
    <Fragment>  
          <App/>
    </Fragment>
    

)