import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme =() =>{
     setTheme('dark')
     if(theme == 'dark'){
       setTheme('light')
     }
  }
  return (
    <>
      <div>
        <h1>Theme is {theme}</h1>
        <Navbar theme={theme} toggleTheme={toggleTheme}/>
      </div>
    </>
  )
}

export default App
