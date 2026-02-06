import React from 'react'
import {useParams} from 'react-router-dom'

 const CoursesDetails = () => {
    const {id} = useParams()
    console.log("id is : ",id)
  return (
    <>
     <div> This is CoursesDetails</div>
    <p> showing detials of course id : {id}</p>
    </>
  )
}

export default CoursesDetails;