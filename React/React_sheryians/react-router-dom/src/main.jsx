
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './About'
import Courses from './Courses'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
       <Route path='/' element={<App />} />
       <Route path='/about' element = {<About />}/>
       <Route path='/courses' element={<Courses />}/>
    </Routes>
  </BrowserRouter>

)
