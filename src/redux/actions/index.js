import { GraphqlApi, GraphqlQueries } from '../../api/graphql'

import { FETCH_USER } from '../constants/action-types'
import { LOGOUT_USER } from '../constants/action-types'

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
    .then(response => dispatchAction(dispatch, FETCH_USER, response.data.data.currentUser))
    .catch(err => console.log(err))
  }
}

export function logoutUser() {
  localStorage.removeItem('authenticationToken');
  return dispatch => dispatchAction(dispatch, LOGOUT_USER, {});
}
