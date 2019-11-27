// Configurations
import React from 'react';

// Components

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// Redux
import { connect } from 'react-redux';

function RaceTrackLine({ participant, participantStatus }) {
  const progressStyle = {
    width: participant.percentage + '%',
  };

  return (
    <Row className="mb-3">
      <Col xs={10}> 
        <div className={ "progress" + (participant.id === participantStatus.id ? " active" : "") }>
          <div className="progress-bar" style={progressStyle}>
            <Image src="https://d1i1eo6qmdfmdv.cloudfront.net/upload/site/models/main_compressed/main-gtr.png" alt="avatar" />
          </div>
        </div>
      </Col>
      <Col xs={2} className="align-self-stretch">
        <div className="userInformation d-flex flex-column justify-content-center align-items-center h-100">
          <span>{participant.username + (participant.id === participantStatus.id ? "(you)" : "")}</span>
          <span className="font-weight-bold">{participant.wpm} WpM</span>
        </div>
      </Col>
    </Row>
  )
}

const mapStateToProps = state => ({
  participantStatus: state.participantStatus
});

export default connect(mapStateToProps)(RaceTrackLine);
