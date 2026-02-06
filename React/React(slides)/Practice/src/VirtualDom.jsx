import React,{useState} from 'react'

const VirtualDom = () => {
    const [showMessage, setMessage] = useState(false);
  return (
    <div>
        <h1> Hello</h1>
        <h2> Hii</h2>
        {showMessage && <h3>React</h3> }
        <button onClick ={() => {setMessage(true)}}>Add Message</button>
    </div>
  )
}

export default VirtualDom;
