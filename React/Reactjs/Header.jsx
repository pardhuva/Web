export  default function Header() {
    return (
      <header>
           <img src = "./react-logo.png" width ="40px" alt = "React logo" />
           <nav>
                {/* now here i added the className section now can i add css  */}
              <ul className ="nav-list"> 
                  <li>Pricing </li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
           </nav>
        </header>
     )  
  }


//now if in any other file if you wannt to use then import in that file 
//  import Header from "./Header"
