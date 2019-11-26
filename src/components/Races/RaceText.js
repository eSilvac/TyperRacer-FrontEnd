// Configurations
import React from 'react';

// Components
import RaceCurrentWord from './RaceCurrentWord';

// Bootstrap

// Redux
import { connect } from 'react-redux';

function RaceText({ participantStatus }) {
  if (Object.keys(participantStatus).length) {
    return (
      <div>
        <span className="text-success">{ participantStatus.words.completedText.join(" ") }</span>
        <RaceCurrentWord />
        <span className="text-muted">{ participantStatus.words.remainingText.join(" ") }</span>
      </div>
    )
  } else {
    return <span>Loading...</span>
  }
}

const mapStateToProps = state => ({
  participantStatus: state.participantStatus
});

export default connect(mapStateToProps)(RaceText);
