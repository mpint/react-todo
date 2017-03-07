/*eslint-disable import/default*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory, browserHistory } from 'react-router';
import { createHistory } from 'history';
import configureStore from '~/config/store/configureStore';
import routes from '~/routes';
import '~/styles/styles.scss'; // load main styles file
import '~/assets/favicon.ico'; // Tell webpack to load favicon.ico -- do not change this line until webpack bug is fixed

// import './reactotron';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();

// https://github.com/reactjs/react-router/issues/3387
// const browserHistory = useRouterHistory(createHistory)({ basename: '/' });

render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>, document.getElementById('app')
);
