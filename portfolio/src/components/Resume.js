import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import imgcv from '../images/cv.png'

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <img src={imgcv} alt="imagetext"/>
      </Container>
    </React.Fragment>
  );
}

