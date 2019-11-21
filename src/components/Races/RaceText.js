// Configurations
import React from 'react';

// Components
import RaceCurrentWord from './RaceCurrentWord';

// Bootstrap

// Redux
import { connect } from 'react-redux';

function RaceText({ raceTextStatus }) {
  if (Object.keys(raceTextStatus).length) {
    return (
      <div>
        <span className="text-success">{ raceTextStatus.words.completedText.join(" ") }</span>
        <RaceCurrentWord currentWord={raceTextStatus.currentWord}/>
        <span className="text-muted">{ raceTextStatus.words.remainingText.join(" ") }</span>
      </div>
    )
  } else {
    return <span>Loading...</span>
  }
}

const mapStateToProps = state => ({
  raceTextStatus: state.raceTextStatus
});

export default connect(mapStateToProps)(RaceText);
