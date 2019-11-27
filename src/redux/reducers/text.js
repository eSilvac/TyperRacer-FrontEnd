import { SET_WPM } from '../constants/action-types';
import { SET_PERCENTAGE } from '../constants/action-types';
import { SET_INPUT_STATUS } from '../constants/action-types';
import { SET_INITIAL_STATE } from '../constants/action-types';

export default function participantStatus(state = {}, action) {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return initialRaceState(state, action.payload);
    case SET_INPUT_STATUS: 
      return handleInputAction(state, action.payload);
    case SET_PERCENTAGE:
      return { ...state, percentage: action.payload }
    case SET_WPM:
      return calculateWPM(state, action.payload);
    default:
      return state;
  }
};

function initialRaceState(state, payload) {
  const words = generateWordsState(payload.text);
  const actualWord = generateActualWordState(words.currentWord);

  return ({
    id: payload.id,
    words: words, 
    actualWord: actualWord, 
    userTypingText: '', 
    error: false, 
    percentage: 0, 
    ended: false, 
    wpm: 0 
  })
}

function handleInputAction(state, payload) {
  const textCurrentWord = state.words.currentWord;
  
  if (payload.inputValue.slice(0, -1) === textCurrentWord && (/\s+$/).test(payload.inputValue)) {
    return setNextWord(state);
  } else {
    state = { ...state, userTypingText: payload.inputValue }
    return setCurrentWord(state, payload.inputValue, textCurrentWord);
  }
}

function setNextWord(state) {
  const { currentWord, completedText, remainingText } = state.words;

  if (remainingText.length === 0 ) {
    return { ...state, ended: true };
  }

  const pastWord = currentWord;
  const currentTextWord = remainingText.shift();
  completedText.push(pastWord);

  const words = generateWordsState(null, completedText, remainingText, currentTextWord);
  const actualWord = generateActualWordState(currentTextWord);

  return ({...state, words: words, actualWord: actualWord, userTypingText: '', error: false })
}

function setCurrentWord(state, inputValue, currentWord) {
  const userTypingLenght = inputValue.length;
  const completedLetters = currentWord.substr(0, userTypingLenght);

  if (completedLetters !== inputValue) {
    return { ...state, error: true }
  }

  const remaingLetters = currentWord.substr(userTypingLenght + 1, currentWord.length);
  const currentLetter = currentWord.charAt(userTypingLenght);
  
  const actualWord = generateActualWordState(null, completedLetters, remaingLetters, currentLetter);
  return ({ ...state, actualWord: actualWord, error: false })
}


function generateWordsState(text = null, completedText, remainingText, currentWord) {
  if (text) {
    text = text.split(" ");

    currentWord = text.shift();
    completedText = [];
    remainingText = text;
  }

  return {
    currentWord: currentWord, 
    remainingText: remainingText,
    completedText: completedText,
  }
}

function generateActualWordState(currentWord = null, completed, remaining, current) {
  return {
    completed: !currentWord ? completed : "",
    remaining: !currentWord ? remaining : currentWord.substr(1),
    current: !currentWord ? current : currentWord.charAt(0)
  }
}

function calculateWPM(state ,seconds) {
  const wpm = Math.floor((60 / seconds) * state.words.completedText.length);

  return { ...state, wpm: wpm }
}
