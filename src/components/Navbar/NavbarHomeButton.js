import React from 'react';
import { Link } from "react-router-dom";

//Bootstrap

// Redux
import { connect } from 'react-redux';
import { closeRace } from './../../redux/actions/racehandle';

function NavbarHomeButton({ closeRace }) {
  return (
    <Link className="navbar-brand" to="/" onClick={ closeRace }>TypeRacer v2</Link>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    closeRace: () => dispatch(closeRace()),
  };
};

export default connect(null, mapDispatchToProps)(NavbarHomeButton);
