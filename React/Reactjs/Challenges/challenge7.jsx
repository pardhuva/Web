/**
 * if it is morning print Good Morning 
 * if it is afternoon print Good Afternoon
 * if it is evening print Good Evening 
 * if it is night print Good Night 
 * 
 */
import ReactDom from "react-dom/client"

function App(){
       const hours = new Date().getHours()
       let timeofday

       if(hours <12){
         timeofday = "morning"
       }
       else if(hours >=12 && hours<17){
         timeofday = "afternoon"
       }
       else if(hours<21){
        timeofday = "evening"
       }
       else{
        timeofday = "night"
       }

       return (
           <h1>Good  {timeofday}</h1>
       )
    
}

ReactDom.createRoot(document.getElementById("root")).render(<App />);