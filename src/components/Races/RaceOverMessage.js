// Configurations
import React from 'react';

// Components

// Bootstrap
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

// Redux
import { connect } from 'react-redux';

function RaceInput({ currentRace, participantStatus }) {
  if (currentRace.status === 'ended' || participantStatus.ended === true) {
    return (
      <Col xs={12}>
        <Alert variant="info" className="mt-3 mb-0">
          You have finish 1. with {participantStatus.wpm} WpM
        </Alert> 
      </Col>
    );
  } else {
    return ('');
  }
}

const mapStateToProps = state => ({
  currentRace: state.currentRace,
  participantStatus: state.participantStatus
});

export default connect(mapStateToProps)(RaceInput);
