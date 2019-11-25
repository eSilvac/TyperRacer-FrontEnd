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
        <span className="text-success">{ " " + raceTextStatus.actualWord.completed }</span>
        <span className={(raceTextStatus.error ? " bg-error" : "") }><ins>{ raceTextStatus.actualWord.current }</ins></span>
        <span className={(raceTextStatus.error ? "bg-error" : "text-muted")}>{ raceTextStatus.actualWord.remaining + " " }</span>
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
