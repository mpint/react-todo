import { interviewModel as initial } from '~/config/initialState';

/*
  actions
 */

 export const ADD_TODO_SAGA = 'INTERVIEW/ADD_TODO_SAGA';
 export const ADD_TODO = 'INTERVIEW/ADD_TODO';

 export const DELETE_TODO_SAGA = 'INTERVIEW/DELETE_TODO_SAGA';
 export const DELETE_TODO = 'INTERVIEW/DELETE_TODO';

 export const LOAD_TODOS = 'INTERVIEW/LOAD_TODOS';

/*
  action creators
 */
export const actions = {
	addTodoSaga: (content) => {
		return { type: ADD_TODO_SAGA, content };
	},

	addTodo: (content) => {
		return { type: ADD_TODO, content };
	},

	deleteTodoSaga: (todoIndex) => {
		return { type: DELETE_TODO_SAGA, todoIndex };
	},

	deleteTodo: (todoIndex) => {
		return { type: DELETE_TODO, todoIndex };
	},

	loadTodos: (todoList) => {
		return { type: LOAD_TODOS, todoList };
	}
};

export default function interviewAppState(state = initial, action) {
	switch (action.type) {
		case ADD_TODO:
		  return {
		    ...state,
        todoList: [ ...state.todoList, action.content ]
		  };

		case DELETE_TODO:
		  return {
		    ...state,
        todoList: [
          ...state.todoList.slice(0, action.todoIndex),
          ...state.todoList.slice(action.todoIndex + 1)
        ]
		  };
		case LOAD_TODOS:
		  return {
		    ...state,
        todoList: [
          ...action.todoList
        ]
		  };

		default:
			return state;
	}
}
