/**
 * challenge :
 * - create a contact component in another file 
 * - move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card 
 *  - think ahead: whats the problem with doing in this way 
 * 
 */

//normally we will create 4 instances manually and keep all in the sam ediv and display them using flexbox

//but using props we can siply just change the name using only one function for all the four instances 

import Contact from "../Contact.jsx"

export default function App() {

    return (
        <div>
             <Contact 
                img = "./cat1.png"
                name = "cat1"
                phone = "1"
                email = "cat1@"

              />
              <Contact 
                  img = "./cat2.png"
                name = "cat2"
                phone = "2"
                email = "cat2@"
              />
               <Contact
                 img = "./cat3.png"
                name = "cat3"
                phone = "3"
                email = "cat3@" 
               />
                <Contact 
                   img = "./cat4.png"
                name = "cat4"
                phone = "4"
                email = "cat4@"
                />
        </div>

    )
}


