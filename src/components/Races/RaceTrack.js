// Configurations
import React from 'react';

// Components

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// Redux
import { connect } from 'react-redux';

function RaceTrack({ raceTextStatus }) {
  const progressStyle = {
    width: raceTextStatus.percentage + '%',
  };

  return (
    <Row>
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
          <span className="font-weight-bold">111 WpM</span>
        </div>
      </Col>
    </Row>
  )
}


const mapStateToProps = state => ({
  raceTextStatus: state.raceTextStatus
});

export default connect(mapStateToProps)(RaceTrack);
