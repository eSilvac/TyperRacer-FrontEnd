// Configurations
import React from 'react';
import { Link } from "react-router-dom";

// Components
import RaceForm from './../../components/Races/RaceForm';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Redux
import { connect } from 'react-redux';

function NavbarLinks({ currentRace }) {
  return (
    <Row className="justify-content-center">
      {Object.keys(currentRace).length ? (
        <Col xs={10}>
          <div className="text-center mt-3">
            <h3 className="mb-3 bold-weight-bold">Lets Get Typing !</h3>
          </div>
        </Col>
      ) : (
        <Col xs={6}>
          <div className="text-center mt-5">
            <h3 className="mb-3 bold-weight-bold">The New Typer Racer</h3>
            <span className="m-0">A place where you can challenge your friends and see who is the fastest using the keyboard !</span>
          </div>
          <div id="CreateRace" className="border-top py-4 mt-4">
            <RaceForm />
          </div>
        </Col>
      )}
    </Row>
  );
}

const mapStateToProps = state => ({
  currentRace: state.currentRace
});

export default connect(mapStateToProps)(NavbarLinks);
