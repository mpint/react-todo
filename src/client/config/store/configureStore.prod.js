import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootDuck from '../ducks';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootDuck,
    initialState,
    // do not add middlware before saga...
    applyMiddleware(sagaMiddleware)
    // Add other middleware on this line...
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
