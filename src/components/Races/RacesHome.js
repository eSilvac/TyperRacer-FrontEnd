// Configurations
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

// Components
import Race from './Race';
import RaceForm from './RaceForm';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Redux
import { connect } from 'react-redux';
import { fetchRace } from './../../redux/actions/racehandle';

function RaceHome({ currentRace, fetchRace }) {
  const { id } = useParams();

  useEffect(() => {
    if (id) { fetchRace(id); }
  }, []);

  return (
    <Row className="justify-content-center">
      {Object.keys(currentRace).length ? (
        <Col xs={12}>
          <div className="text-center mt-4">
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

const mapDispatchToProps = dispatch => {
  return {
    fetchRace: (id) => dispatch(fetchRace(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RaceHome);
