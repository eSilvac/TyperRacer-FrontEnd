import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from '../middlewares/logger';

import userReducer from '../reducers/user';

const store = createStore(userReducer, applyMiddleware(logger, thunk));

export default store;
