// Configurations
import React from 'react';
import { TimeCounter } from './../../services/TimeCounter'

// Components

// Bootstrap
import Col from 'react-bootstrap/Col';

// Redux
import { connect } from 'react-redux';

function RaceTimer({ currentRace }) {
  return (
    <Col xs={12} className="text-left mb-3"> 
      <span>Time Left: { TimeCounter(currentRace.time.toEnd) }</span>
    </Col>
  )
}


const mapStateToProps = state => ({
  currentRace: state.currentRace
});

export default connect(mapStateToProps)(RaceTimer);
