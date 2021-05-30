import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import { restCheckReducer as restCheck } from './rest_check';
import { analyzedRecentReducer as analyzedRecent } from './api/analyzed_recent';

export const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    restCheck,
    analyzedRecent,
  });
};
