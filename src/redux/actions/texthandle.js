import { GraphqlApi, GraphqlQueries } from '../../api/graphql'

import { SET_WPM } from '../constants/action-types';
import { SET_PERCENTAGE } from '../constants/action-types';
import { SET_INPUT_STATUS } from '../constants/action-types';
import { SET_INITIAL_STATE } from '../constants/action-types';

import { SET_RACE_TIMING } from '../constants/action-types';

const dispatchAction = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload
  });
};

export function setInputStatus(payload) {
  return dispatch => dispatchAction(dispatch, SET_INPUT_STATUS, payload); 
}

export function setInitialParticipantStatus(race) {
  return async (dispatch, getState) => { 
    const user = getState().currentUser;

    const participantPayload = {
      userId: user.id || null,
      raceId: race.id,
      status: 'onProgress'
    }

    try {
      const { data } = await GraphqlApi.post('graphql', {
        query: GraphqlQueries.createParticipant,
        variables: {
          participantPayload: participantPayload
        }
      });
      const timing = data.data.createParticipant.timing;
      const participantId = data.data.createParticipant.participant.id;
      dispatchAction(dispatch, SET_INITIAL_STATE, { id: participantId, text: race.text });
      dispatchAction(dispatch, SET_RACE_TIMING, timing);
      emitNewParticipant(participantId, user, getState().currentRace.socket);
    } catch (error) {
      console.log(error);
    }
  }
}

export function setPercentage() {
  return (dispatch, getState) => {
    const raceStatus = getState().participantStatus;
    const textLength = getState().currentRace.text.length;
    const currentTextLength = raceStatus.words.completedText.join(" ").length + raceStatus.actualWord.completed.length;

    const result = (currentTextLength * 100) / textLength;

    dispatchAction(dispatch, SET_PERCENTAGE, result)
  } 
}

export function setWPM(time) {
  return dispatch => dispatchAction(dispatch, SET_WPM, time);
}

function emitNewParticipant(id, user, socket) {
  const socketPayload = {
    id: id,
    username: user.username || 'Anonymous',
    wpm: 0,
    percentage: 0
  }

  socket.emit('newParticipant', socketPayload);
}
