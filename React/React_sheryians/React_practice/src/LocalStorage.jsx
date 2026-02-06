import React from 'react';

const LocalStorage = () => {
  
  //  Set a simple key-value pair
  localStorage.setItem('user', 'pardhuva');

  //  Retrieve it
  const user = localStorage.getItem('user');
  console.log('User:', user); // Output: pardhuva

  //  Create an object
  const user1 = {
    username: 'pardhuva',
    age: 20,
    city: 'vizag'
  };

  //  Store object as string (must use JSON.stringify)
  localStorage.setItem('user2', JSON.stringify(user1));

  //  Retrieve and parse the object
  const storedUser = JSON.parse(localStorage.getItem('user2'));
  console.log('Stored User:', storedUser);

  // ❌ Don't clear or remove here unless testing
  // localStorage.removeItem('user');
  // localStorage.clear();

  return (
    <div>
      <h1>App</h1>
      <p>Check the console to see localStorage logs.</p>
    </div>
  );
};

export default LocalStorage;
