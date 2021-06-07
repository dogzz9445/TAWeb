import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import { restCheckReducer as restCheck } from './apis/rest_check';
import { chartReducer as chart } from './apis/chart';

export const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    restCheck,
    chart,
  });
};
