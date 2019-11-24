import { SET_PERCENTAGE } from '../constants/action-types';
import { SET_INPUT_STATUS } from '../constants/action-types';
import { SET_INITIAL_STATE } from '../constants/action-types';

const dispatchAction = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload
  });
};

export function setInputStatus(payload) {
  return dispatch => dispatchAction(dispatch, SET_INPUT_STATUS, payload); 
}

export function setInitialTextStatus(text) {
  return dispatch => dispatchAction(dispatch, SET_INITIAL_STATE, text);
}

export function setPercentage() {
  return (dispatch, getState) => {
    const raceStatus = getState().raceTextStatus;
    const textLength = getState().currentRace.text.length;
    const currentTextLength = raceStatus.words.completedText.join(" ").length + raceStatus.actualWord.completed.length;

    const result = (currentTextLength * 100) / textLength;

    dispatchAction(dispatch, SET_PERCENTAGE, result)
  } 
}
