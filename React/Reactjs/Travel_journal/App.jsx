
/**
 * import the array of data from data.js 
 * map over the array to create an <Entry /> component for every item in the data array 
 * display the array of entry components in place of the currently hard-coded <Entry /> instance.
 */

import Header from "./Components/Header"
import Entry from "./Components/Entry"
import data from "./data"

export default function App() {

    const entryElements = data.map((entry) =>{
         return (
             <Entry 
                key = {entry.id}
                //  img = {entry.img}
                // title = {entry.title}
                // country = {entry.country}
                // googleMapsLink = {entry.googleMpaslink}
                // dates ={entry.dates}
                // text = {entry.text}    //instead of sending for everything we send the entry prop
                
                //entry = {entry}    //go modify the Entry
                {...entry}

            />
         )
    })
    return (
       
      <>
        <Header/>
        <main>
            {entryElements}
        </main>
      </>
    )
} 


