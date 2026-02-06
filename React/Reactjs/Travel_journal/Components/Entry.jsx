/**
 * build out the entry component and render 1 instance of it to the app 
 * 
 * for now, jsut hard-code in the data,which you can find in japan and so you dont have to tyep all out manually 
 * 
 * notes:
 * - only rende 1 instance od this entry componet for now 
 * - i've pulled in marker.png for the little map marker icon 
 *   that goes next to the location name 
 * - the main purpose of this challenge is to show you where our limitations 
 *  currently are, so dont worry about the fact that you're hard-coding all this data into the component 
 * 
 */

/**
 * build out the entry component and render 1 instance of it to the app 
 * 
 * for now, just hard-code in the data, which you can find in japan and so you don't have to type all out manually 
 * 
 * notes:
 * - only render 1 instance of this entry component for now 
 * - i've pulled in marker.png for the little map marker icon 
 *   that goes next to the location name 
 * - the main purpose of this challenge is to show you where our limitations 
 *  currently are, so don't worry about the fact that you're hard-coding all this data into the component 
 * 
 */

import "./entry.css"

export default function Entry(props) {
     return (
        <article>
          
            <div>
                <img src={props.img.src} alt = {props.img.alt} />
                <span>{props.entry.name}</span>
                <a href={props.entry.link} title={props.name.title}>View on google maps</a>
            </div>
        </article>
     )
}