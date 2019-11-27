import React from 'react';

//Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

// Redux
import { connect } from 'react-redux';

function RaceShareLink({ currentRace }) {
  return (
    <Row className="justify-content-center mb-3">
      <Col xs={4}>
        <Alert variant="success">
          <h6 className="font-wheight-bold">Share this link to your friends!</h6>
          <p className="mb-0">
            { window.location.hostname + "/" + currentRace.id }               
          </p>
        </Alert>
      </Col>
    </Row>
  );
}

const mapStateToProps = state => ({
  currentRace: state.currentRace,
  participantStatus: state.participantStatus
});

export default connect(mapStateToProps)(RaceShareLink);
