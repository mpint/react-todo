import * as m from '../interview.sagas';
import { actions } from '../interview.ducks';
import { nextValue, throwValue } from '~/lib/test.helpers';
import { put, call, take, fork } from 'redux-saga/effects';

describe('Interview sagas', () => {
  describe('watchAddTodoSaga', () => {
    it(`adds a todo`, () => {
      const saga = m.watchAddTodoSaga();
      expect(
        nextValue(saga)
      ).toEqual(
        take(actions.addTodoSaga().type)
      );

      const testString = 'test todo';

      expect(
        nextValue(saga, { content: testString })
      ).toEqual(
        put(actions.addTodo(testString))
      );
    });
  });

  describe('watchDeleteTodoSaga', () => {
    it(`deletes a todo`, () => {
      const saga = m.watchDeleteTodoSaga();
      expect(
        nextValue(saga)
      ).toEqual(
        take(actions.deleteTodoSaga().type)
      );

      expect(
        nextValue(saga, { todoIndex: 0 })
      ).toEqual(
        put(actions.deleteTodo(0))
      );
    });
  });
});
