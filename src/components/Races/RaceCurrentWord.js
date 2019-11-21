// Configurations
import React from 'react';

// Components

// Bootstrap

// Redux
import { connect } from 'react-redux';

function RaceText({ raceTextStatus }) {
  if (Object.keys(raceTextStatus).length) {
    return (
      <>
        <span className="text-success">{ " " + raceTextStatus.letters.completed }</span>
        <span className="font-weight-bold">{ raceTextStatus.letters.current }</span>
        <span className="text-dark">{ raceTextStatus.letters.remaining + " " }</span>
      </>
    )
  } else {
    return <span>Loading...</span>
  }
}

const mapStateToProps = state => ({
  raceTextStatus: state.raceTextStatus
});

export default connect(mapStateToProps)(RaceText);
