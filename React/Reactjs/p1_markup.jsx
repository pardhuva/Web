/**
 * start from scratch build and render the html for our section project.
 * check the google slide for what you're trying to build 
 * 
 * we'll be adding more styling to it later 
 * 
 * hints:
 *  the react logo is a file int eh project tree,
      so you can access it by using 'src="react-logo.png" in your image element 
 *  you can also set the 'width' attribute of the image element just like in HTML. in the slide I have it set to 40px
 */


 import  {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))

 root.render(
     <main>
           <img src="gh.jpg" width="20px" fontsize="40px"/>
           <h1>Fun facts about  our golden maknae</h1>
           <ul>
               <li>Cute</li>
               <li>Funny</li>
               <li>handsome</li>
               <li>Lovely</li>
           </ul>
     </main>   
 )