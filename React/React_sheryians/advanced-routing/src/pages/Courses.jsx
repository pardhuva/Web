import React from 'react'
import {Link,Outlet} from 'react-router-dom'
 
export const Courses = () => {
  return (
    <>
     <div>This is Courses page</div>
      <ul>
        <li><Link to="1">Course1</Link></li>
        <li><Link to="2">Course2</Link></li>
      </ul>
      <Outlet />
    </>
  )
}

export default Courses 
