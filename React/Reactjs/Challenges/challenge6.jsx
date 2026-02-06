

/**
 *  complete the Navbar to match the figma design 
 * 
 * hints 
 * - for semantic HTML purposes , the Navbar should render 
 *  a <header> with a <nav> nested inside .the image and "ReactFacts"
 *  text elements can both be rendered as children inside the <nav> 
 * - reference the FIgma design fo rthe most accurate info about 
 * colors,sizes.font information , etc.
 */

import "./Navbar.css";

export default function Navbar(){

    return (
        <header>
            <nav>
                <img src="gh.jpg" alt="something "></img>
                <span>Reactfacts</span>
            </nav>
        </header>
    )
}

//css file is Navbar.css
