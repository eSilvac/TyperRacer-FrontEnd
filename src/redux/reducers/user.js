import { FETCH_USER } from '../constants/action-types'
import { LOGOUT_USER } from '../constants/action-types'

const initialState = {
  currentUser: {}
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, currentUser: action.payload }
    case LOGOUT_USER:
      return { currentUser: {} }
    default:
      return state;
  }
};

export default userReducer;
