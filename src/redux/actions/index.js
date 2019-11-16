import GraphqlApi from '../api/graphql'

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
  if (!token) return dispatch => dispatchAction(dispatch, 'LOGOUT_USER', {});
  console.log(token)

  return dispatch => {
    GraphqlApi.post('graphql', {
      query: `
        query GetCurrentUser {
          currentUser(token: "${token}") {
            id
            username
            email
          }
        }
      `
    })
    .then(response => dispatchAction(dispatch, FETCH_USER, response.data.data.currentUser))
    .catch(err => console.log(err))
  }
}

export function createNewUser(userPayload) {
  return dispatch => {
    GraphqlApi.post('graphql', {
      query: `
        mutation CreateNewUser($userPayload: UserRegistInputType!) {
          registerUser(userPayload: $userPayload) {
            token
          }
        }
      `, 
      variables: {
        userPayload: userPayload
      }
    })
    .then(response => {
      localStorage.setItem('authenticationToken', response.data.data.registerUser.token); 
    })
  }
}

export function logoutUser() {
  localStorage.removeItem('authenticationToken');
  return dispatch => dispatchAction(dispatch, 'LOGOUT_USER', {});
}
