import { combineReducers } from 'redux';
import currentUser from './user';
import currentRace from './race';
import participantStatus from './text';

export default combineReducers({
  currentUser,
  currentRace,
  participantStatus
});
