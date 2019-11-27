// Configurations
import React, { Component } from 'react';

// Components
import RaceTimer from './RaceTimer';
import RaceTrackLine from './RaceTrackLine';
import RaceOverMessage from './RaceOverMessage';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Redux
import { connect } from 'react-redux';

class RaceTrack extends Component {
  constructor(props) {
    super(props);
    this.handleWS = this.handleWS.bind(this);

    this.state = {
      participants: []
    }
  }
 
  componentDidMount() {
    this.props.currentRace.socket.on('participants', this.handleWS)
  }

  handleWS(data) {
    this.setState({ participants: data.participants })
    console.log(this.state.participants)
  }


  render() {
    return (
      <Row>
        <RaceTimer />
        <Col xs={12}>
          {this.state.participants.map((participant) => 
            <RaceTrackLine participant={participant} />
          )}
        </Col>
        <RaceOverMessage />
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  participantStatus: state.participantStatus,
  currentRace: state.currentRace
});

export default connect(mapStateToProps)(RaceTrack);
