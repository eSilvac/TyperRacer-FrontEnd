import { GraphqlApi, GraphqlQueries } from '../../api/graphql'
import { connectToWS } from '../../api/websocket';

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
  return dispatch => dispatchAction(dispatch, SET_RACE, generateRacePayload(racePayload));
}

export function fetchRace(id) {
  return async (dispatch, getState) => {  
    try {
      const { data } = await GraphqlApi.post('graphql', {
        query: GraphqlQueries.getRace(id),
      });
      dispatchAction(dispatch, SET_RACE, generateRacePayload(data.data.getRace));
    } catch (error) {
      console.log(error);
    }
  }
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

const generateRacePayload = (racePayload) => {
  return {
    id: racePayload.race.id,
    text: racePayload.quote.text,
    status: "waiting",
    socket: connectToWS(racePayload.race.id)
  }
}
