import React from 'react';

// Utilities
import QuoteForm from './../../components/Quotes/QuoteForm'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function newQuote() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6}>
          <Card className="mt-5">
            <Card.Header>
              <h5 className="m-0">Create Quote</h5>
            </Card.Header>
            <Card.Body>
              <QuoteForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default newQuote;
