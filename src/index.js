import App from './App';
import React from 'react';

// import store from './js/store/index';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { verifyUser } from './js/actionsCreator/user/index';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

// store.dispatch(verifyUser());

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister();
