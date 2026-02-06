import { useState } from 'react'
import './App.css'
import Button from './Button.jsx'
 import VirtualDom from './VirtualDom.jsx'
import Usestate from './Usestate.jsx'
import Dashboard from './Dashboard.jsx'

function App() {
  const user = {name:"pardhuva"};

  return (
    <>
       <Button /> 
       <VirtualDom />
       <Usestate />
       <Dashboard user={user}/>
    </>
  )
}

export default App
