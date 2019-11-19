import { SET_RACE } from '../constants/action-types'

export default function currentRace(state = {}, action) {
  switch (action.type) {
    case SET_RACE:
      return state = action.payload;
    default:
      return state;
  }
};
