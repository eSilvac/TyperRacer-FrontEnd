  import { GraphqlApi, GraphqlQueries } from '../../api/graphql'

import { FETCH_USER } from '../constants/action-types'
import { LOGOUT_USER } from '../constants/action-types'
import { SET_RACE } from '../constants/action-types'

const dispatchAction = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload
  });
};

export function verifyUser() {
  const token = localStorage.getItem("authenticationToken")
  if (!token) return dispatch => dispatchAction(dispatch, LOGOUT_USER, {});

  return dispatch => {
    GraphqlApi.post('graphql', {
      query: GraphqlQueries.getCurrentUser(token)
    })
    .then(response => {
      const payload = response.data.data.currentUser;
      if (!payload) {
        localStorage.removeItem('authenticationToken');
      }

      dispatchAction(dispatch, FETCH_USER, payload || {})  
    })
    .catch(err => console.log(err))
  }
}

export function setRace(racePayload) {
  console.log(racePayload)
  const currentRacePayload = { 
    id: racePayload.race.id,
    text: racePayload.quote.text,
    createdAt: racePayload.race.createdAt,
  }
  return dispatch => dispatchAction(dispatch, SET_RACE, currentRacePayload);
}

export function logoutUser() {
  localStorage.removeItem('authenticationToken');
  return dispatch => dispatchAction(dispatch, LOGOUT_USER, {});
}
