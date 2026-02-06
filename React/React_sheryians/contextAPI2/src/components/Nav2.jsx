import React from 'react'

const Nav2 = (props) => {
  return (
    <div className='flex flex-row justify-between'>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact</h2>
        <button onClick={props.toggleTheme}>{props.theme}</button>
    </div>
  )
}

export default Nav2 