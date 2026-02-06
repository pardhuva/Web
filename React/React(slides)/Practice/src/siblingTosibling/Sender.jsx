import React from 'react'

export const Sender = ({setMessage}) => {
  return (
    <div>
        <h2>Sender Component</h2>
        <input placeholder="Enter the message"/>
        <button onClick={setMessage} > Send to Receiver</button>
    </div>
  )
}

export default Sender;
