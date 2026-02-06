import React from 'react'
import {BrowserRouter , Routes, Route} from "react-router-dom";



export const Browserrouter = () => {
  return (
     <BrowserRouter>
       <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/courses" element ={<Courses />} />
           <Route path="/about" element ={<About />} />
       </Routes>
     </BrowserRouter>
  )
}
