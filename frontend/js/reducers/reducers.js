import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

<<<<<<< HEAD:frontend/js/store/reducers.js
import { restCheckReducer as restCheck } from './rest_check';
import { analyzedRecentReducer as analyzedRecent } from './api/analyzed_recent';
=======
import { restCheckReducer as restCheck } from './apis/rest_check';
import { chartReducer as chart } from './apis/chart';
>>>>>>> b87c33de9749494d5ec50369fd0d8a64f87184cd:frontend/js/reducers/reducers.js

export const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    restCheck,
<<<<<<< HEAD:frontend/js/store/reducers.js
    analyzedRecent,
=======
    chart,
>>>>>>> b87c33de9749494d5ec50369fd0d8a64f87184cd:frontend/js/reducers/reducers.js
  });
};
