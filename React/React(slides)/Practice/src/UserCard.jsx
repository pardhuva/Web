import UserName from './UserName.jsx';
import React from 'react'

const UserCard = ({user}) => {
  return (
    <div>
        <h3>Usercard Component</h3>
        <UserName user={user} />
    </div>
  )
}

export default UserCard;