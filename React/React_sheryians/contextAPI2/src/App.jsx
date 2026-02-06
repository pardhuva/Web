import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  
  const [theme,setTheme] = useState('light')

  const toggleTheme = () =>{
      
      if(theme == 'dark'){
          setTheme('light')
          document.body.style.backgroundColor='white';
          document.body.style.color='black';
      }else{
        setTheme('dark');
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
      }
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme}>
         <h2>This is Navbar</h2>
      </Navbar>
    </>
  )
}

export default App
