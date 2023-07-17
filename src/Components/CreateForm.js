import React, { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';

function CreateForm({ onUserCreated }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCreate = () => {
    // Create a new user object
    const newUser = { id: Date.now(), name, email };

    // Get existing users from local storage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the array
    const updatedUsers = [...existingUsers, newUser];

    // Save the updated users array to local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Invoke the callback function from the parent component
    onUserCreated(newUser);

    // Clear the form inputs
    setName('');
    setEmail('');
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <TextField label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Create
        </Button>
      </Grid>
    </Grid>
  );
}

export default CreateForm;
