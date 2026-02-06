import React from 'react'
import Joke from "./Components/joke"
import './App.css'


/**
 * Challenge: Think critically - how would you pass in a prop that 
 * isn't a string datatype.
 * 
 * E.g. Say you want each Joke component to receive an "upvotes" 
 * and "downvotes" prop that is a number, as well as a prop with 
 * an array of comments, and a boolean of whether the joke is a 
 * pun (`isPun`).
 */

//then you have to send the data inside the curly braces like 
//upvotes = {10}


export default function App() {
    return (
        <div className="joke-container">
           <Joke 
               setup="I got my daughter a fridge for her birthday."
               punchline="I can't wait to see her face light up when she opens it." 
               upvotes ={10}
               ispun ={true}
               comments = {[
                    {author: "" , text: "" , title:""},
                    {author: "" , text: "" , title:""}
                ]}
           />
           <Joke 
               setup="How did the hacker escape the police?"
               punchline="He just ransomware!"
                upvotes ={10}
               ispun ={true}
               comments = {[
                    {author: "" , text: "" , title:""},
                    {author: "" , text: "" , title:""}
                ]}
           />
           <Joke 
               setup="Why don't pirates travel on mountain roads?"
               punchline="Scurvy."
                upvotes ={12}
               ispun ={true}
               comments = {[
                    {author: "" , text: "" , title:""},
                    {author: "" , text: "" , title:""}
                ]}
           />
           <Joke 
               setup="Why do bees stay in the hive in the winter?"
               punchline="Swarm."
                upvotes ={13}
               ispun ={true}
               comments = {[
                    {author: "" , text: "" , title:""},
                    {author: "" , text: "" , title:""}
                ]}
           />
           <Joke 
               setup="What's the best thing about Switzerland?"
               punchline="I don't know, but the flag is a big plus!"  
                upvotes ={14}
               ispun ={false} 
               comments = {[
                    {author: "" , text: "" , title:""},
                    {author: "" , text: "" , title:""}
                ]}      
           />
        </div>
    )
}