// Configurations
import React from 'react';

// Components

// Bootstrap
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

// Redux
import { connect } from 'react-redux';

function RaceInput({ currentRace, raceTextStatus }) {
  if (currentRace.status === 'ended' || raceTextStatus.ended === true) {
    return (
      <Col xs={12}>
        <Alert variant="info" className="mt-3 mb-0">
          You have finish 1. with 111 WpM
        </Alert> 
      </Col>
    );
  } else {
    return ('');
  }
}

const mapStateToProps = state => ({
  currentRace: state.currentRace,
  raceTextStatus: state.raceTextStatus
});

export default connect(mapStateToProps)(RaceInput);
