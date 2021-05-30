import api from '../api';

// Action types
const types = {
  FETCH_REQUESTED: 'analyzed/recent/FETCH_REQUESTED',
  FETCH_SUCCESS: 'analyzed/recent/FETCH_SUCCESS',
  FETCH_ERROR: 'analyzed/recent/FETCH_ERROR',
};

// Action creators
export const creators = {
  fetchAnalyzedRecent: () => {
    return async (dispatch) => {
      dispatch({ type: types.FETCH_REQUESTED });
      try {
        const res = await api.get('/api/anaylzed/recent/');
        dispatch({ type: types.FETCH_SUCCESS, data: res.data });
      } catch (error) {
        dispatch({ type: types.FETCH_ERROR, error });
      }
    };
  },
};

// Reducer
export const analyzedRecentReducer = (state = {}, action) => {
  if (action.type === types.FETCH_SUCCESS) return action.data;
  return state;
};
