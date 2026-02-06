import React from 'react'
import Nav2 from './Nav2'

 const Navbar = (props) => {
  return (
    <div className='nav'>
       <p>Pardhuva</p>
        {props.children[0]}
       <Nav2 theme={props.theme} toggleTheme={props.toggleTheme}/>
    </div>
  )
}
export default Navbar