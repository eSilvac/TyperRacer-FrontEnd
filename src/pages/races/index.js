import React from 'react';

// Utilities
import RaceForm from './../../components/Races/RaceForm';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function newQuote() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6}>
          <div className="text-center mt-5">
            <h3 className="mb-3 bold-weight-bold">The New Typer Racer</h3>
            <span className="m-0">A place where you can challenge your friends and see who is the fastest using the keyboard !</span>
          </div>
          <div id="CreateRace" className="border-top py-4 mt-4">
            <RaceForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default newQuote;
