import { SET_INITIAL_STATE } from '../constants/action-types'
import { SET_USER_TYPING } from '../constants/action-types'
import { SET_LETTERS } from '../constants/action-types'
import { SET_NEXT_WORD } from '../constants/action-types'

const dispatchAction = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload
  });
};

export function setInitialTextStatus(text) {
  const wordsPayload = initialWordsPayload(text);
  const lettersPayload = initialLetterPayload(wordsPayload.currentWord);

  return dispatch => dispatchAction(dispatch, SET_INITIAL_STATE, generatePayload(wordsPayload, lettersPayload));
}

export function setNextWord(wordsPayload) {
  const lettersPayload = initialLetterPayload(wordsPayload.currentWord);

  return dispatch => dispatchAction(dispatch, SET_NEXT_WORD, generatePayload(wordsPayload, lettersPayload));
}

export function setLetter(payload) {
  return dispatch => dispatchAction(dispatch, SET_LETTERS, payload);
}

export function setUserTyping(payload) {
  return dispatch => dispatchAction(dispatch, SET_USER_TYPING, payload);
}

function generatePayload(wordsPayload, lettersPayload) {
  return {
    words: wordsPayload,
    letters: lettersPayload,
    userTypingText: ""
  }
}

function initialWordsPayload(text) {
  const remainingText = text.split(" ");
  const currentWord = remainingText.shift();

  return {
    completedText: [],
    remainingText: remainingText,
    currentWord: currentWord
  }
}

function initialLetterPayload(currentWord) {
  return {
    completed: [],
    remaining: currentWord.substr(1),
    current: currentWord.charAt(0)
  }
}
