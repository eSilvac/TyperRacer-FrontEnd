import { FETCH_USER } from '../constants/action-types'
import { LOGOUT_USER } from '../constants/action-types'

export default function currentUser(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return state = action.payload
    case LOGOUT_USER:
      return state = {}
    default:
      return state;
  }
};
