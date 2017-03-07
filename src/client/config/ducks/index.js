import { combineReducers } from 'redux';

import commonAppState from '~/modules/common/state/common.ducks';
import interviewAppState from '~/modules/interview/state/interview.ducks';

const rootDuck = combineReducers({
  commonAppState,
  interviewAppState
});

export default rootDuck;
