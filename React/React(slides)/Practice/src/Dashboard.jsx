import UserCard from './UserCard';
import React from 'react';

const Dashboard = ({user}) => {
  return (
    <div>
        <h3>Dashboard Component</h3>
        <UserCard user= {user} />
    </div>
  )
}

export default Dashboard;
