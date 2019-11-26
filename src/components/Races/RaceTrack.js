// Configurations
import React from 'react';

// Components
import RaceTimer from './RaceTimer';
import RaceOverMessage from './RaceOverMessage';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// Redux
import { connect } from 'react-redux';

function RaceTrack({ participantStatus }) {
  const progressStyle = {
    width: participantStatus.percentage + '%',
  };

  return (
    <Row>
      <RaceTimer />
      <Col xs={10}> 
        <div className="progress">
          <div className="progress-bar" style={progressStyle}>
            <Image src="https://images.vexels.com/media/users/3/151418/list/95eed63274d0447ee06e5f44c204e7c4-goes-like-bullet-motorcycle.jpg" alt="avatar" />
          </div>
        </div>
      </Col>
      <Col xs={2} className="align-self-stretch">
        <div className="userInformation d-flex flex-column justify-content-center align-items-center h-100">
          <span>Username</span>
          <span className="font-weight-bold">{participantStatus.wpm} WpM</span>
        </div>
      </Col>
      <RaceOverMessage />
    </Row>
  )
}


const mapStateToProps = state => ({
  participantStatus: state.participantStatus
});

export default connect(mapStateToProps)(RaceTrack);
