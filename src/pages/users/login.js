import React from 'react';

// Utilities
import UserForm from './../../components/User/UserForm'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function Login() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6}>
          <Card className="mt-5">
            <Card.Header>
              <h5 className="m-0">Login</h5>
            </Card.Header>
            <Card.Body>
              <UserForm userParams={{username:"", password: ""}} newUser={false}  />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
