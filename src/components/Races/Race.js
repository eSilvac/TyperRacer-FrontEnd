// Configurations
import React, { Component }  from 'react';
import './stylesheets/races.scss';

// Components
import RaceText from './RaceText';
import RaceInput from './RaceInput';
import RaceTrack from './RaceTrack';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Redux
import { connect } from 'react-redux';
import { raceCountdown, raceStart, raceEnd, raceTimer } from './../../redux/actions/racehandle';
import { setInitialTextStatus, setWPM } from './../../redux/actions/texthandle';

class Race extends Component {
  constructor(props) {
    super(props);
    this.raceCountdown = this.raceCountdown.bind(this);
  }

  componentDidMount() {
    this.props.setInitialTextStatus(this.props.currentRace);
    this.setNewInterval(this.raceCountdown.bind(this));
  };
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setNewInterval(fn) {
    this.timer = setInterval(fn, 1000);
  }
 
  raceCountdown() {
    this.props.raceCountdown();
    if (this.props.currentRace.time.toStart <= 0) {
      this.props.raceStart();
      clearInterval(this.timer);
      this.setNewInterval(this.raceTimer.bind(this));
    }
  }

  raceTimer() {
    this.props.raceTimer();
    if (this.props.currentRace.time.toEnd <= 0)  {
      this.props.raceEnd();
      clearInterval(this.timer);
    } else {
      if (!this.props.participantStatus.ended) { this.props.setWPM(this.props.currentRace.time.actual);}
    }
  }

  render () {
    return (
      <Row className="justify-content-center my-4">
        <Col className="raceText" xs={5}>
          <Card body className="mt-2">
            <RaceText />
          </Card>
          <Form onSubmit={ e => e.preventDefault() }>
            <Form.Group className="mt-3">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">Type Here!</InputGroup.Text>
                </InputGroup.Prepend>
                <RaceInput />
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>

        <Col className="raceTrack" xs={5}>
          <Card body className="mt-2">
            <RaceTrack />
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  currentRace: state.currentRace,
  participantStatus: state.participantStatus
});

const mapDispatchToProps = dispatch => {
  return {
    raceEnd: () => dispatch(raceEnd()),
    raceStart: () => dispatch(raceStart()),
    raceTimer: () => dispatch(raceTimer()),
    raceCountdown: () => dispatch(raceCountdown()),
    setWPM: (time) => dispatch(setWPM(time)),
    setInitialTextStatus: (text) => dispatch(setInitialTextStatus(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Race);
