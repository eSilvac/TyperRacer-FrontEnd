import { combineReducers } from 'redux';
import currentUser from './user';
import currentRace from './race';

export default combineReducers({
  currentUser,
  currentRace
});
