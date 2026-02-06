
/**
 * recreate the above line of code in vanilla js by create and 
 * appending h1 to our divroot (without usign innerHTML)
 *  - create a new h1 element
 *  - give it some textContent
 *  - Give it a class name of header
 *  - append it as a child (using 'appendChild') of the div#root
 *  - 
 */

const h1 = document.createElement("h1")
//giving the element some textContent
h1.textContent = "this is imperative coding"    //because we code everything manually 
//giving header to aan element
h1.className = "header"
//appeding to the root
document.getElementById("root").appendChild(h1)

//the above one is imperative

//the below one is declarative 
// root.render{
//      <h1 className="header">this is declarative</h1>
// }

