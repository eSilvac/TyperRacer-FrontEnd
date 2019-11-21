// Configurations
import React, { useEffect } from 'react';
import './stylesheets/races.scss';

// Components
import RaceText from './RaceText';
import RaceInput from './RaceInput';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

// Redux
import { connect } from 'react-redux';
import { setInitialTextStatus } from './../../redux/actions/texthandle';

function Race({ currentRace, setInitialTextStatus }) {
  useEffect( () => {
    setInitialTextStatus(currentRace.text);
  });

  return (
    <Row className="my-4">
      <Col className="raceText" xs={6}>
        <Card body className="mt-2">
          <RaceText />
        </Card>
        <Form onSubmit={ e => e.preventDefault() }>
          <Form.Group className="mt-3">
            <RaceInput />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

const mapStateToProps = state => ({
  currentRace: state.currentRace
});

const mapDispatchToProps = dispatch => {
  return {
    setInitialTextStatus: (text) => dispatch(setInitialTextStatus(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Race);
