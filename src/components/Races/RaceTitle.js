// Configurations
import React from 'react';

// Components

// Bootstrap

// Redux
import { connect } from 'react-redux';

function RaceTitle({ currentRace }) {
  switch (currentRace.status) {
    case 'started':
      return (<h3 className="mb-4 bold-weight-bold">Lets Get Typing !</h3>);
    case 'ended':
      return (<h3 className="mb-4 bold-weight-bold">The Race is Over !</h3>);
    default:
      return (<h3>The Race will start in {currentRace.time.toStart}</h3>);
  }
}

const mapStateToProps = state => ({
  currentRace: state.currentRace
});

export default connect(mapStateToProps)(RaceTitle);
