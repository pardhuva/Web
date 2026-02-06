import React, { useState } from 'react';

export const App = () => {
  const [users, SetUser] = useState([]);

    const handleUser = async () => {
    const response = await fetch('/data.json');
    console.log("Response:", response);

    const data = await response.json();
    console.log("Fetched Data:", data);
    const allUsers = data.users;

    const randomUser = allUsers[Math.floor(Math.random()*allUsers.length)];
    SetUser(prev => [...prev,randomUser]);
  }

  return (
    <div>
      <div>
        {users.map((user, i) => (
          <div key={i}>
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>Country: {user.country}</p>
            <img src={user.image} alt={user.name} width="100" />
          </div>
        ))}
      </div>
      <button onClick={handleUser}>Get User</button>
    </div>
  );
};

export default App