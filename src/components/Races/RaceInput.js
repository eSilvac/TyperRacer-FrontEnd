// Configurations
import React, { Component } from 'react';

// Components

// Bootstrap
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Redux
import { connect } from 'react-redux';
import { setPercentage, setInputStatus } from './../../redux/actions/texthandle';

class RaceInput extends Component {
  // Cambiar esta logicao
  handleKeyPress = ( event ) => {
    const inputValue = event.target.value;
    const lastWordInput = inputValue[inputValue.length - 1];
    this.props.setInputStatus({ lastChar: lastWordInput , inputValue: inputValue });
    this.props.setPercentage();
  }

  render() {
    return (
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroupPrepend">Type Here!</InputGroup.Text>
        </InputGroup.Prepend>

        <Form.Control
          name="userTyping"
          type="text"
          placeholder="Type the text"
          autoComplete="off"
          aria-describedby="inputGroupPrepend"
          className={"text-input py-4" + (this.props.raceTextStatus.error ? " bg-error" : "") }
          value={this.props.raceTextStatus.userTypingText} 
          onChange={this.handleKeyPress.bind(this)}
        />
      </InputGroup>
    )
  }
}

const mapStateToProps = state => ({
  currentRace: state.currentRace,
  raceTextStatus: state.raceTextStatus
});

const mapDispatchToProps = dispatch => {
  return {
    setPercentage: () => dispatch(setPercentage()),
    setInputStatus: (payload) => dispatch(setInputStatus(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RaceInput);
