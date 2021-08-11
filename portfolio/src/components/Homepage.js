import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import OutlinedCard from './Card'
import Cardtwo from './Cardtwo';
import Cardthree from './Cardthree';
import Cardskills from './Cardskills';

export default function Homepage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <OutlinedCard />
        <Cardskills/> 
        <Cardtwo/>
        <Cardthree/>
    </Container>
    </React.Fragment>
  );
}
