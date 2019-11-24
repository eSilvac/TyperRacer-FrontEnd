import { SET_PERCENTAGE } from '../constants/action-types';
import { SET_INPUT_STATUS } from '../constants/action-types';
import { SET_INITIAL_STATE } from '../constants/action-types';

export default function raceTextStatus(state = {}, action) {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return initialRaceState(state, action.payload);
    case SET_INPUT_STATUS: 
      return handleInputAction(state, action.payload);
    case SET_PERCENTAGE:
      return { ...state, percentage: action.payload }
    default:
      return state;
  }
};

function initialRaceState(state, text) {
  const words = generateWordsState(text);
  const actualWord = generateActualWordState(words.currentWord);

  return ({ words: words, actualWord: actualWord, userTypingText: "", error: false, percentage: 0 })
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
  const currentTextWord = remainingText.shift();
  const pastWord = currentWord;
  completedText.push(pastWord);

  const words = generateWordsState(null, completedText, remainingText, currentTextWord);
  const actualWord = generateActualWordState(currentTextWord);

  return ({ words: words, actualWord: actualWord, userTypingText: "", error: false })
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
    completedText = [];
    remainingText = text.split(" ");
    currentWord = remainingText.shift();
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