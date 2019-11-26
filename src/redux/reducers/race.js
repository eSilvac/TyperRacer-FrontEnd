import { SET_RACE } from '../constants/action-types'
import { RACE_END } from '../constants/action-types';
import { RACE_START } from '../constants/action-types';
import { RACE_TIMER } from '../constants/action-types';
import { RACE_COUNTDOWN } from '../constants/action-types';
import { CLOSE_RACE } from '../constants/action-types';

export default function currentRace(state = {}, action) {
  switch (action.type) {
    case SET_RACE:
      return state = action.payload;
    case RACE_COUNTDOWN:
      return { ...state, time: { ...state.time, toStart: action.payload }}
    case RACE_TIMER:
      return { ...state, time: { ...state.time, actual: state.time.actual + 1, toEnd: action.payload }}
    case RACE_START:
      return { ...state, status: 'started' }
    case RACE_END:
      return { ...state, status: 'ended' }
    case CLOSE_RACE:
      return state = {};
    default:
      return state;
  }
};

