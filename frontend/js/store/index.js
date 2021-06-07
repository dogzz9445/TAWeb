import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { createRootReducer } from './reducers';
import rootSaga from "../sagas";

export const history = createBrowserHistory();

const rootReducer = createRootReducer(history);

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history), sagaMiddleware));

const configureStore = (preloadedState) => {
  const store = createStore(rootReducer, preloadedState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
