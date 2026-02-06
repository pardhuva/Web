import Navbar from "./Navbar"
import Main from "./Main"
import { Fragment } from "react" 

export default function App() {

    return (
        <Fragment>
            <Navbar/>
             <h1>App Component goes here </h1>
            <Main/>
        </Fragment>
       
    )
}