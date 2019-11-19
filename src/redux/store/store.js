import thunk from 'redux-thunk';
import logger from '../middlewares/logger';
import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers/index';

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
