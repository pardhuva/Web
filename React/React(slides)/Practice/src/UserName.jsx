
import React from 'react'

const UserName = ({user}) => {
  return (
    <div>
        <h3>Username Component</h3>
        <p>User name : {user.name}</p>
    </div>
  )
}

export default UserName;