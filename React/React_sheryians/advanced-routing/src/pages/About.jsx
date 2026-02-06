import React from 'react'
import {Link,Outlet} from 'react-router-dom'


const About = () => {

  return (
    <div>
       
      <p>This is About page</p>
      <div>
        <Link to='/about/admin/'>Admin</Link>
      <Link to='/about/user'>User</Link>
      </div>

      <Outlet />
    </div>

  )
}

export default About
