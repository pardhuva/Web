import React from 'react'
import Sender from './Sender.jsx'
import Receiver from './Receiver.jsx'

export const Parent = () => {
    const [message, setMessage]  = useState("");
  return (
    <div>
      <Sender  onSend={setMessage}/>
      <Receiver message={message} />
    </div>
  )
}

export default Parent;