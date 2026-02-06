import React from 'react'

const Form = () => {
  
    const submitHandler =(elem)=>{
       elem.preventDefault();
       console.log("submitted");
    }

  return (
    <form onSubmit={(elem) => {submitHandler(elem)}}>
        <input type="text" placeholder="enter your name"/>
        <button>Submit</button>
    </form>
  )
}

export default Form