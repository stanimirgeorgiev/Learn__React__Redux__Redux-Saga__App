'use-strict'
import React from 'react';
import { render } from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import UsersTasks from './app/views/users-tasks';
import './css/styles.css';

const appDomId = 'root';
const rootContainer = document.getElementById(appDomId);
const reactComponent = (
  <React.Fragment>
    <CssBaseline />
    <UsersTasks />
  </React.Fragment>
);

render(reactComponent, rootContainer);
