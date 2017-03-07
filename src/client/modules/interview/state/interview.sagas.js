import { put, call, take, fork } from 'redux-saga/effects';
import { actions, ADD_TODO_SAGA, DELETE_TODO_SAGA } from './interview.ducks';

import { getLocalStorageItem, setLocalStorageItem } from '~/modules/common/state/localStorage';

export function* watchAddTodoSaga() {
	while(true) {
		const { content } = yield take(ADD_TODO_SAGA);

		const list = yield getLocalStorageItem('todo-list');

		yield setLocalStorageItem('todo-list', [
			...(list || []),
			content
		]);

		yield put(actions.addTodo(content));
	}
}
export function* watchDeleteTodoSaga() {
	while(true) {
		const { todoIndex } = yield take(DELETE_TODO_SAGA);

		const list = yield getLocalStorageItem('todo-list');

		yield setLocalStorageItem('todo-list', [
			...list.slice(0, todoIndex),
			...list.slice(todoIndex + 1)
		]);

		yield put(actions.deleteTodo(todoIndex));
	}
}
export default [
  watchAddTodoSaga(),
  watchDeleteTodoSaga()
];
