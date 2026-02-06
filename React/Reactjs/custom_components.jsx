import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))

root.render(
    <TemporaryName/>
)

function TemporaryName() {
      
    return (
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
    
}