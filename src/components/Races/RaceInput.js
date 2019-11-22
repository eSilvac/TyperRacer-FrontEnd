// Configurations
import React, { Component } from 'react';

// Components

// Bootstrap
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Redux
import { connect } from 'react-redux';
import { setNextWord, setUserTyping, setLetter, setError, setPercentage } from './../../redux/actions/texthandle';

class RaceInput extends Component {
  handleChange = ( event ) => {
    const inputValue = event.target.value;
    const userCurrentWord = inputValue.slice(0, -1);
    const textCurrentWord = this.props.raceTextStatus.words.currentWord;
    const lastWordInputValue= inputValue[inputValue.length - 1];

    if (userCurrentWord === textCurrentWord && lastWordInputValue === " ") {
      this.setNewTextStatus();
    } else {
      this.setLetterStatus(inputValue, textCurrentWord);
      this.props.setUserTyping(inputValue);
    }
  }

  setNewTextStatus = () => {
    const { currentWord, completedText, remainingText } = this.props.raceTextStatus.words;
    const currentTextWord = remainingText.shift();
    const pastWord = currentWord;
    completedText.push(pastWord);

    this.props.setNextWord({
      completedText: completedText,
      remainingText: remainingText,
      currentWord: currentTextWord
    });
  }

  setLetterStatus = (inputValue, currentWord) => {
    const userTypingLenght = inputValue.length;

    const completedLetters = currentWord.substr(0, userTypingLenght);
    const remaingLetters = currentWord.substr(userTypingLenght + 1, currentWord.length);
    const currentLetter = currentWord.charAt(userTypingLenght)

    if (completedLetters !== inputValue) {
      this.props.setError();
    } else {
      this.props.setLetter({
        completed: completedLetters,
        remaining: remaingLetters,
        current: currentLetter
      });

      this.props.setPercentage(this.props.currentRace.text, completedLetters);
    }
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
          onChange={this.handleChange.bind(this)}
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
    setLetter: (payload) => dispatch(setLetter(payload)),
    setNextWord: (payload) => dispatch(setNextWord(payload)),
    setUserTyping: (payload) => dispatch(setUserTyping(payload)),
    setError: () => dispatch(setError()),
    setPercentage: (text, completedText) => dispatch(setPercentage(text, completedText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RaceInput);
