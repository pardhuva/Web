import React from 'react'
import {useEffect} from 'react'

const Reason = () => {

    
    function hello(){
        console.log("hello ji");
    }
    useEffect(() =>{
        hello();
    }, [])

  return (
    <div>
       <p> lets find out what is the reason </p>
    </div>
  )
}

export default Reason