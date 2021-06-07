import api from '../api';

// Action types
const types = {
  FETCH_REQUESTED: 'chart/FETCH_REQUESTED',
  FETCH_SUCCESS: 'chart/FETCH_SUCCESS',
  FETCH_ERROR: 'chart/FETCH_ERROR',
};

// Action creators
export const creators = {
  fetchRestCheck: () => {
    return async (dispatch) => {
      dispatch({ type: types.FETCH_REQUESTED });
      try {
        const res = await api.get('/api/analyzed/decks/');
        dispatch({ type: types.FETCH_SUCCESS, data: res.data });
      } catch (error) {
        dispatch({ type: types.FETCH_ERROR, error });
      }
    };
  },
};

// Reducer
export const chartReducer = (state = {}, action) => {
  if (action.type === types.FETCH_SUCCESS) return action.data;
  return state;
};
