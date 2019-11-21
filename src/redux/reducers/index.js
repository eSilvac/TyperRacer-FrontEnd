import { combineReducers } from 'redux';
import currentUser from './user';
import currentRace from './race';
import raceTextStatus from './text';

export default combineReducers({
  currentUser,
  currentRace,
  raceTextStatus
});
