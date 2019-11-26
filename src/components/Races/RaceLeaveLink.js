import React from 'react';
//Bootstrap

// Redux
import { connect } from 'react-redux';
import { closeRace } from './../../redux/actions/racehandle';

function RaceLeaveLink({ closeRace }) {
  return (
    <a href="/" onClick={ closeRace }>
      leave race
    </a>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    closeRace: () => dispatch(closeRace()),
  };
};

export default connect(null, mapDispatchToProps)(RaceLeaveLink);
