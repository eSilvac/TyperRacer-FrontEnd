import App from './pages/App';
import React from 'react';

import store from './redux/store/store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { verifyUser } from './redux/actions/index';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

store.dispatch(verifyUser());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister();
