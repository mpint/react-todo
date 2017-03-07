import commonSagas from '~/modules/common/state/common.sagas';
import interviewSagas from '~/modules/interview/state/interview.sagas';

export default function* rootSaga() {
  yield [
    ...commonSagas,
    ...interviewSagas
  ];
}
