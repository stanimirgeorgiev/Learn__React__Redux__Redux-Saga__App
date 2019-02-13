'use-strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import CssBaseline from '@material-ui/core/CssBaseline';

import appReducer from './app/reducers/app';

import UsersTasks from './app/views/users-tasks-container';
import './css/styles.css';

const reducers = appReducer;
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const appDomId = 'root';
const rootContainer = document.getElementById(appDomId);
const reactComponent = (
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <UsersTasks />
    </React.Fragment>
  </Provider>
);

render(reactComponent, rootContainer);
