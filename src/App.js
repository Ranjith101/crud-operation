import React, { useState } from 'react';
import CreateForm from './components/CreateForm';
import ReadData from './components/ReadData';
import LoginForm from './components/Login';
import { Button } from '@mui/material';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  React.useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    const initialUsers = [
      { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
      { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com' },
      { id: 4, name: 'Alice Brown', email: 'alicebrown@example.com' },
      { id: 5, name: 'Tom Wilson', email: 'tomwilson@example.com' }
    ];

    if (storedUsers) {
      setUsers([...initialUsers, ...storedUsers]);
    } else {
      setUsers(initialUsers);
    }
  }, []);
  const handleUserCreated = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleUserDeleted = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleUserUpdated = (id, name, email) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            name: name,
            email: email
          };
        }
        return user;
      });
    });
  };

  return (
    <div>
      <h1>CRUD Application</h1>
      {isLoggedIn?(
        <>
        <Button onClick={handleLogout}>Logout</Button>
        <CreateForm onUserCreated={handleUserCreated} />
        <ReadData users={users} onUserDeleted={handleUserDeleted} onUserUpdated={handleUserUpdated} />
        </>
      ):(<LoginForm onLogin={handleLogin} />)}

    </div>
  );
}

export default App;
