import {createElement} from "react"
import { createRoot } from "react-dom/client"   // importing createRoot from react-dom library inside from a client module 

// 1. create a root
const root = createRoot(document.getElementById("root"))  //pass the dom node to the root 
const reactelement = createElement("h1",null,"Army Loves BTS too")  //for single element 
const reactElement = createElement("h2",null,createElement("span",null,"Army Loves BTS too")) //for nested elements 


// 2 . render some markup to the root
root.render(<h1>BTS loves Army</h1>)

root.render(<ul>
     <li>this is item1</li>
     <li>this is item2</li>
     <li>this is item3</li>
</ul>)

root.render( reactelement)
