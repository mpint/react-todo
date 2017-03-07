import * as m from '../common.sagas';
import { actions } from '../common.ducks';
import { getApiStatus } from '../../promises';
import { nextValue, throwValue } from '~/lib/test.helpers';
import { put, call, take, fork } from 'redux-saga/effects';

describe('Common sagas', () => {
  describe('emitAppLoaded', () => {
    it(`emits an appLoaded event when app loads`, () => {
      const saga = m.emitAppLoaded();
      expect(
        nextValue(saga)
      ).toEqual(
        put(actions.appLoaded())
      );
    });
  });

  describe('watchAppLoadedSaga', () => {
    it(`dispatches success message if api is running`, () => {
      const saga = m.watchAppLoadedSaga();
      expect(
        nextValue(saga)
      ).toEqual(
        take(actions.appLoaded().type)
      );

      expect(
        nextValue(saga)
      ).toEqual(
        put(actions.apiStatusRequest())
      );

      expect(
        nextValue(saga)
      ).toEqual(
        call(getApiStatus)
      );

      expect(
        nextValue(saga)
      ).toEqual(
        put(actions.apiStatusSuccess())
      );
    });
  });

  describe('watchIncrementCounterSaga', () => {
    it(`increments the counter`, () => {
      const saga = m.watchIncrementCounterSaga();

      expect(
        nextValue(saga)
      ).toEqual(
        take(actions.incrementCounterSaga().type)
      );

      expect(
        nextValue(saga)
      ).toEqual(
        put(actions.incrementCounter())
      );
    });
  });

});
