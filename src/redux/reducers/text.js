import { SET_INITIAL_STATE } from '../constants/action-types';
import { SET_USER_TYPING } from '../constants/action-types';
import { SET_PERCENTAGE } from '../constants/action-types';
import { SET_NEXT_WORD } from '../constants/action-types';
import { SET_LETTERS } from '../constants/action-types';
import { SET_ERROR } from '../constants/action-types';

export default function raceTextStatus(state = {}, action) {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return state = action.payload;
    case SET_NEXT_WORD:
      return {
        ...state,
        words: action.payload.words,
        letters: action.payload.letters,
        userTypingText: "",
        error: false
      }
    case SET_LETTERS:
      return { ...state, letters: action.payload, error: false }
    case SET_USER_TYPING:
      return { ...state, userTypingText: action.payload }
    case SET_ERROR:
      return { ...state, error: true }
    case SET_PERCENTAGE:
      return { ...state, percentage: action.payload }
    default:
      return state;
  }
};
