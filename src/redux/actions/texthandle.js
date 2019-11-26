import { GraphqlApi, GraphqlQueries } from '../../api/graphql'

import { SET_WPM } from '../constants/action-types';
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

export function setInitialTextStatus(race) {

  return async (dispatch, getState) => { 
    const participantPayload = {
      userId: getState().currentUser.id || null,
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
      const participantId = data.data.createParticipant.id;
      dispatchAction(dispatch, SET_INITIAL_STATE, { id: participantId, text: race.text });
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
