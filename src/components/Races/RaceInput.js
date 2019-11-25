// Configurations
import React from 'react';

// Components
import RaceActiveInput from './RaceActiveInput';
import RaceLockedInput from './RaceLockedInput';

// Bootstrap

// Redux
import { connect } from 'react-redux';

function RaceInput({ currentRace, raceTextStatus }) {
  if (currentRace.status === 'started' && raceTextStatus.ended === false) {
    return <RaceActiveInput />
  } else {
    return <RaceLockedInput />
  }
}

const mapStateToProps = state => ({
  currentRace: state.currentRace,
  raceTextStatus: state.raceTextStatus
});

export default connect(mapStateToProps)(RaceInput);
