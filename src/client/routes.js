import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppRoot from '~/modules/common/containers/AppRoot';
import Main from '~/modules/common/containers/MainPage';
import CreditsPage from '~/modules/common/containers/CreditsPage';
import NotFoundPage from '~/modules/common/containers/NotFoundPage';

import InterviewPage from '~/modules/interview/containers/InterviewPage';

import injectConfiguration from '~/modules/common/containers/injectConfig';

import c from '~/config/main.config';

export default (
  <Route component={ injectConfiguration(AppRoot) } path={ c.pages.main.slug }>
    <IndexRoute component={ Main } />

    <Route component={ CreditsPage } path={c.pages.credits.slug } />
    <Route component={ InterviewPage } path={c.pages.interview.slug } />

    <Route component={ NotFoundPage } path="*" />
  </Route>
);
