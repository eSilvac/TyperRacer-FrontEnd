// Configurations
import React from 'react';

// Components

// Bootstrap

// Redux
import { connect } from 'react-redux';

function RaceText({ participantStatus }) {
  if (Object.keys(participantStatus).length) {
    return (
      <>
        <span className="text-success">{ " " + participantStatus.actualWord.completed }</span>
        <span className={(participantStatus.error ? " bg-error" : "") }><ins>{ participantStatus.actualWord.current }</ins></span>
        <span className={(participantStatus.error ? "bg-error" : "text-muted")}>{ participantStatus.actualWord.remaining + " " }</span>
      </>
    )
  } else {
    return <span>Loading...</span>
  }
}

const mapStateToProps = state => ({
  participantStatus: state.participantStatus
});

export default connect(mapStateToProps)(RaceText);
