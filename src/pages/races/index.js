import React from 'react';

// Utilities
import RaceHome from './../../components/Races/RacesHome';

// Bootstrap
import Container from 'react-bootstrap/Container';

function newQuote() {
  return (
    <Container fluid={true}>
      <RaceHome />
    </Container>
  );
}

export default newQuote;
