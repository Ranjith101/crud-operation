import React from 'react';
import { Button, TextField, Grid } from '@mui/material';

function UpdateForm() {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <TextField label="Name" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Email" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Update
        </Button>
      </Grid>
    </Grid>
  );
}

export default UpdateForm;
