// Configurations
import React from 'react';

// Components
import Race from './Race';
import RaceForm from './RaceForm';
import RaceTitle from './RaceTitle';
import RaceLeaveLink from './RaceLeaveLink';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Redux
import { connect } from 'react-redux';

function RaceHome({ currentRace }) {
  return (
    <Row className="justify-content-center">
      {Object.keys(currentRace).length ? (
        <Col xs={12}>
          <div className="text-center mt-5">
            <RaceTitle />
            <RaceLeaveLink />
            <Race />
          </div>
        </Col>
      ) : (
        <Col xs={4}>
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

export default connect(mapStateToProps)(RaceHome);
