import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Admin from './pages/Admin'
import User from './pages/User'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'
import Navbar2 from './components/Navbar2'

function App() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='admin' element={<Admin />} />
          <Route path='user' element={<User />} />
        </Route>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses/:id' element={<CoursesDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
