// Configurations
import React from 'react';

// Components
import RaceActiveInput from './RaceActiveInput';
import RaceLockedInput from './RaceLockedInput';

// Bootstrap

// Redux
import { connect } from 'react-redux';

function RaceInput({ currentRace, participantStatus }) {
  if (currentRace.status === 'started' && participantStatus.ended === false) {
    return <RaceActiveInput />
  } else {
    return <RaceLockedInput />
  }
}

const mapStateToProps = state => ({
  currentRace: state.currentRace,
  participantStatus: state.participantStatus
});

export default connect(mapStateToProps)(RaceInput);
