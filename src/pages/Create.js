import React from 'react';
import { Typography, Button, Container } from '@material-ui/core/';
// import { AcUnitOutlinedIcon } from '@material-ui/icons';

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log('You clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>

      {/* Icons */}
      {/* <AcUnitOutlinedIcon /> */}
    </Container>
  );
}
