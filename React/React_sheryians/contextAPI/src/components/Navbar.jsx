import React from 'react'

const Navbar = (props) => {
    let theme = props.theme
    let toggleTheme = props.toggleTheme
  return (
    <div>
        <p>{theme}</p>
        <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}

export default Navbar
