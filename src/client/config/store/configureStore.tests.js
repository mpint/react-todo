import { createStore } from 'redux';
import rootDuck from '../ducks';

export default function configureStore(initialState) {

  const store = createStore(
    rootDuck,
    initialState
  );

  return store;
}
