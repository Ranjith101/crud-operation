import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import '../styles/login.css';
function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if the entered username and password are correct
    if (username === 'test' && password === '123456') {
      onLogin();
    }
  };

  return (
    <div className="login-form-container">
      <TextField
        className="input-field"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        className="input-field"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        className="login-button"
        variant="contained"
        color="primary"
        onClick={handleLogin}
      >
        Login
      </Button>
    </div>
  );
}

export default LoginForm;
