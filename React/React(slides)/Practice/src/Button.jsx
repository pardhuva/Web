import React from 'react'

const Button = () => {
    const handleClick = () =>{
        alert("button is clicked")
    }
  return (
    <button onClick ={handleClick}>Click me </button>
  )
}

export default Button 