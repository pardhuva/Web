/**
 * set up a new react app ffrom scratch 
 * hints :
 * 1. eed to import the method to create a root 
 *   from the react-dom/client package 
 * 2.use that root to render some jsx/for now just
 *  render an h1 element that says anything you want 
 * 
 */

import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById("root"))

root.render(
    <div>
         <img src="gh.jpg"/>
       <h1>this is another element</h1> 
    </div>
)

