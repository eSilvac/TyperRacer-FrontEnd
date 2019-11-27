import { SET_RACE } from '../constants/action-types'
import { SET_RACE_TIMING } from '../constants/action-types';
import { RACE_END } from '../constants/action-types';
import { RACE_START } from '../constants/action-types';
import { RACE_TIMER } from '../constants/action-types';
import { RACE_COUNTDOWN } from '../constants/action-types';
import { CLOSE_RACE } from '../constants/action-types';

export default function currentRace(state = {}, action) {
  switch (action.type) {
    case SET_RACE:
      return state = action.payload;
    case SET_RACE_TIMING:
      return setTimingStatus(state, action.payload);
    case RACE_COUNTDOWN:
      return { ...state, time: { ...state.time, toStart: state.time.toStart - 1 }}
    case RACE_TIMER:
      return { ...state, time: { ...state.time, current: state.time.current + 1, toEnd: state.time.toEnd - 1 }}
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

const setTimingStatus = (state, timing) => {
  let status = state.status;

  if (timing.toEnd <= 0) {
    status = 'ended';
  } else if (timing.toStart <= 0) {
    status = 'started';
  }

  return {
    ...state,
    status: status,
    time: timing
  }
}
