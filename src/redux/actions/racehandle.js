import { SET_RACE } from '../constants/action-types';
import { RACE_END } from '../constants/action-types';
import { RACE_START } from '../constants/action-types';
import { RACE_TIMER } from '../constants/action-types';
import { RACE_COUNTDOWN } from '../constants/action-types';
import { CLOSE_RACE } from '../constants/action-types'

const dispatchAction = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload
  });
};

export function setRace(racePayload) {
  const currentRacePayload = { 
    id: racePayload.race.id,
    text: racePayload.quote.text,
    time: generateRaceTiming(racePayload.quote.text),
    status: "waiting"
  }
  return dispatch => dispatchAction(dispatch, SET_RACE, currentRacePayload);
}

export function raceCountdown() {
  return dispatch => dispatchAction(dispatch, RACE_COUNTDOWN, null);
}

export function raceTimer() {
  return dispatch => dispatchAction(dispatch, RACE_TIMER, null);
}

export function raceStart() {
  return dispatch => dispatchAction(dispatch, RACE_START, null);
}

export function raceEnd() {
  return dispatch => dispatchAction(dispatch, RACE_END, null);
}

export function closeRace() {
  return dispatch => dispatchAction(dispatch, CLOSE_RACE, null);
}

const generateRaceTiming = (text) => {
  //const textLength = text.split(" ").length;
  //const maxTime = textLength * 5;
  
  return {
    actual: 0,
    toStart: 5,
    toEnd: 120
  }
}

